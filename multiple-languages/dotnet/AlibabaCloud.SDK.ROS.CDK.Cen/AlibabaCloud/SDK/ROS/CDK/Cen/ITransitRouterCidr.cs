using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Represents a `TransitRouterCidr`.</summary>
    [JsiiInterface(nativeType: typeof(ITransitRouterCidr), fullyQualifiedName: "@alicloud/ros-cdk-cen.ITransitRouterCidr")]
    public interface ITransitRouterCidr : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Cidr: The CIDR block of the transit router.</summary>
        [JsiiProperty(name: "attrCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCidr
        {
            get;
        }

        /// <summary>Attribute Description: The new description of the transit router CIDR block.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute Family: The type of the CIDR block.</summary>
        [JsiiProperty(name: "attrFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFamily
        {
            get;
        }

        /// <summary>Attribute PublishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.</summary>
        [JsiiProperty(name: "attrPublishCidrRoute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublishCidrRoute
        {
            get;
        }

        /// <summary>Attribute TransitRouterCidrId: The ID of the CIDR block.</summary>
        [JsiiProperty(name: "attrTransitRouterCidrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterCidrId
        {
            get;
        }

        /// <summary>Attribute TransitRouterCidrName: The new name of the transit router CIDR block.</summary>
        [JsiiProperty(name: "attrTransitRouterCidrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterCidrName
        {
            get;
        }

        /// <summary>Attribute TransitRouterId: The ID of the transit router.</summary>
        [JsiiProperty(name: "attrTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.TransitRouterCidrProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterCidrProps Props
        {
            get;
        }

        /// <summary>Represents a `TransitRouterCidr`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterCidr), fullyQualifiedName: "@alicloud/ros-cdk-cen.ITransitRouterCidr")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterCidr
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Cidr: The CIDR block of the transit router.</summary>
            [JsiiProperty(name: "attrCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The new description of the transit router CIDR block.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Family: The type of the CIDR block.</summary>
            [JsiiProperty(name: "attrFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFamily
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.</summary>
            [JsiiProperty(name: "attrPublishCidrRoute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublishCidrRoute
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterCidrId: The ID of the CIDR block.</summary>
            [JsiiProperty(name: "attrTransitRouterCidrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterCidrId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterCidrName: The new name of the transit router CIDR block.</summary>
            [JsiiProperty(name: "attrTransitRouterCidrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterCidrName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterId: The ID of the transit router.</summary>
            [JsiiProperty(name: "attrTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.TransitRouterCidrProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterCidrProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterCidrProps>()!;
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
