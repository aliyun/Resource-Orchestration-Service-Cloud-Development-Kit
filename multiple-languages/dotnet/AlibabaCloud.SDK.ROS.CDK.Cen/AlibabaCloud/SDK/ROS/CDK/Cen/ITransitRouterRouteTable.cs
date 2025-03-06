using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Represents a `TransitRouterRouteTable`.</summary>
    [JsiiInterface(nativeType: typeof(ITransitRouterRouteTable), fullyQualifiedName: "@alicloud/ros-cdk-cen.ITransitRouterRouteTable")]
    public interface ITransitRouterRouteTable : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ClientToken: ClientToken.</summary>
        [JsiiProperty(name: "attrClientToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClientToken
        {
            get;
        }

        /// <summary>Attribute TransitRouterId: TransitRouterId.</summary>
        [JsiiProperty(name: "attrTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterId
        {
            get;
        }

        /// <summary>Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteTableDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteTableDescription
        {
            get;
        }

        /// <summary>Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteTableId
        {
            get;
        }

        /// <summary>Attribute TransitRouterRouteTableName: TransitRouterRouteTableName.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteTableName
        {
            get;
        }

        /// <summary>Attribute TransitRouterRouteTableType: TransitRouterRouteTableType.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteTableType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteTableType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.TransitRouterRouteTableProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteTableProps Props
        {
            get;
        }

        /// <summary>Represents a `TransitRouterRouteTable`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterRouteTable), fullyQualifiedName: "@alicloud/ros-cdk-cen.ITransitRouterRouteTable")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteTable
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ClientToken: ClientToken.</summary>
            [JsiiProperty(name: "attrClientToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClientToken
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterId: TransitRouterId.</summary>
            [JsiiProperty(name: "attrTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteTableDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteTableDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterRouteTableName: TransitRouterRouteTableName.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteTableName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterRouteTableType: TransitRouterRouteTableType.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteTableType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteTableType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.TransitRouterRouteTableProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteTableProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteTableProps>()!;
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
