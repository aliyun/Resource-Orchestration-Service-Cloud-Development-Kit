import * as ros from '@alicloud/ros-cdk-core';
import { RosProductPortfolioAssociation } from './servicecatalog.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProductPortfolioAssociation as ProductPortfolioAssociationProperty };

/**
 * Properties for defining a `ProductPortfolioAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
 */
export interface ProductPortfolioAssociationProps {

    /**
     * Property portfolioId: The ID of the product portfolio.
     */
    readonly portfolioId: string | ros.IResolvable;

    /**
     * Property productId: The ID of the product.
     */
    readonly productId: string | ros.IResolvable;
}

/**
 * Represents a `ProductPortfolioAssociation`.
 */
export interface IProductPortfolioAssociation extends ros.IResource {
    readonly props: ProductPortfolioAssociationProps;

    /**
     * Attribute ProductId: The ID of the product.
     */
    readonly attrProductId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ServiceCatalog::ProductPortfolioAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProductPortfolioAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
 */
export class ProductPortfolioAssociation extends ros.Resource implements IProductPortfolioAssociation {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ProductPortfolioAssociationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ProductId: The ID of the product.
     */
    public readonly attrProductId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProductPortfolioAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosProductPortfolioAssociation = new RosProductPortfolioAssociation(this, id,  {
            portfolioId: props.portfolioId,
            productId: props.productId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProductPortfolioAssociation;
        this.attrProductId = rosProductPortfolioAssociation.attrProductId;
    }
}
