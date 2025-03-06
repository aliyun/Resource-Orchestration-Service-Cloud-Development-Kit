using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Represents a `TransitRouterRouteEntry`.</summary>
    [JsiiInterface(nativeType: typeof(ITransitRouterRouteEntry), fullyQualifiedName: "@alicloud/ros-cdk-cen.ITransitRouterRouteEntry")]
    public interface ITransitRouterRouteEntry : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteEntryDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteEntryDescription
        {
            get;
        }

        /// <summary>Attribute TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteEntryDestinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteEntryDestinationCidrBlock
        {
            get;
        }

        /// <summary>Attribute TransitRouterRouteEntryId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteEntryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteEntryId
        {
            get;
        }

        /// <summary>Attribute TransitRouterRouteEntryName: TransitRouterRouteEntryName.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteEntryName
        {
            get;
        }

        /// <summary>Attribute TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteEntryNextHopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteEntryNextHopId
        {
            get;
        }

        /// <summary>Attribute TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteEntryNextHopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteEntryNextHopType
        {
            get;
        }

        /// <summary>Attribute TransitRouterRouteEntryType: TransitRouterRouteEntryType.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteEntryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteEntryType
        {
            get;
        }

        /// <summary>Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteTableId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.TransitRouterRouteEntryProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteEntryProps Props
        {
            get;
        }

        /// <summary>Represents a `TransitRouterRouteEntry`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterRouteEntry), fullyQualifiedName: "@alicloud/ros-cdk-cen.ITransitRouterRouteEntry")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteEntry
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteEntryDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteEntryDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteEntryDestinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteEntryDestinationCidrBlock
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterRouteEntryId: The first ID of the resource.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteEntryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteEntryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterRouteEntryName: TransitRouterRouteEntryName.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteEntryName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteEntryNextHopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteEntryNextHopId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteEntryNextHopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteEntryNextHopType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterRouteEntryType: TransitRouterRouteEntryType.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteEntryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteEntryType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.TransitRouterRouteEntryProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteEntryProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteEntryProps>()!;
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
