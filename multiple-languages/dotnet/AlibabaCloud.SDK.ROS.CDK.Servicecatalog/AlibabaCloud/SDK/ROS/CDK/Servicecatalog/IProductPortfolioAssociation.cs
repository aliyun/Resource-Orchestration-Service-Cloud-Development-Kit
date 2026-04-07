using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Servicecatalog
{
    /// <summary>Represents a `ProductPortfolioAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IProductPortfolioAssociation), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.IProductPortfolioAssociation")]
    public interface IProductPortfolioAssociation : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ProductId: The ID of the product.</summary>
        [JsiiProperty(name: "attrProductId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProductId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-servicecatalog.ProductPortfolioAssociationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IProductPortfolioAssociationProps Props
        {
            get;
        }

        /// <summary>Represents a `ProductPortfolioAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IProductPortfolioAssociation), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.IProductPortfolioAssociation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IProductPortfolioAssociation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ProductId: The ID of the product.</summary>
            [JsiiProperty(name: "attrProductId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProductId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-servicecatalog.ProductPortfolioAssociationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IProductPortfolioAssociationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IProductPortfolioAssociationProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
