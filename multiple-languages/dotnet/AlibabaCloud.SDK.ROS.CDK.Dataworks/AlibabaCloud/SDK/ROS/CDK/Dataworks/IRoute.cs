using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dataworks
{
    /// <summary>Represents a `Route`.</summary>
    [JsiiInterface(nativeType: typeof(IRoute), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.IRoute")]
    public interface IRoute : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: Time when route information was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DestinationCidr: The CIDR blocks of the destination-based route.</summary>
        [JsiiProperty(name: "attrDestinationCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDestinationCidr
        {
            get;
        }

        /// <summary>Attribute DwResourceGroupId: ID of the resource group to which the route belongs.</summary>
        [JsiiProperty(name: "attrDwResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDwResourceGroupId
        {
            get;
        }

        /// <summary>Attribute NetworkId: The ID of the network resource to which the route belongs.</summary>
        [JsiiProperty(name: "attrNetworkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkId
        {
            get;
        }

        /// <summary>Attribute ResourceId: Identifier of the network resource to which the route belongs.</summary>
        [JsiiProperty(name: "attrResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceId
        {
            get;
        }

        /// <summary>Attribute RouteId: The route ID.</summary>
        [JsiiProperty(name: "attrRouteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRouteId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dataworks.RouteProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dataworks.IRouteProps Props
        {
            get;
        }

        /// <summary>Represents a `Route`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRoute), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.IRoute")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dataworks.IRoute
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: Time when route information was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DestinationCidr: The CIDR blocks of the destination-based route.</summary>
            [JsiiProperty(name: "attrDestinationCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDestinationCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DwResourceGroupId: ID of the resource group to which the route belongs.</summary>
            [JsiiProperty(name: "attrDwResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDwResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkId: The ID of the network resource to which the route belongs.</summary>
            [JsiiProperty(name: "attrNetworkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceId: Identifier of the network resource to which the route belongs.</summary>
            [JsiiProperty(name: "attrResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RouteId: The route ID.</summary>
            [JsiiProperty(name: "attrRouteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRouteId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dataworks.RouteProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dataworks.IRouteProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dataworks.IRouteProps>()!;
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
