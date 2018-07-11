import { Column, Entity, OneToMany } from 'typeorm';

import { DeepPartial } from '../../../../shared/shared-types';
import { LocaleString, Translatable, Translation } from '../../locale/locale-types';
import { VendureEntity } from '../base/base.entity';
import { ProductOption } from '../product-option/product-option.entity';

import { ProductOptionGroupTranslation } from './product-option-group-translation.entity';

@Entity()
export class ProductOptionGroup extends VendureEntity implements Translatable {
    constructor(input?: DeepPartial<ProductOptionGroup>) {
        super(input);
    }

    name: LocaleString;

    @Column({ unique: true })
    code: string;

    @OneToMany(type => ProductOptionGroupTranslation, translation => translation.base, { eager: true })
    translations: Array<Translation<ProductOptionGroup>>;

    @OneToMany(type => ProductOption, option => option.group)
    options: ProductOption[];
}
