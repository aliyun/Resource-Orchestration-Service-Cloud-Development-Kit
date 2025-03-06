using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen.Datasource
{
    /// <summary>Represents a `TransitRouterRouteTables`.</summary>
    [JsiiInterface(nativeType: typeof(ITransitRouterRouteTables), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.ITransitRouterRouteTables")]
    public interface ITransitRouterRouteTables : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute TransitRouterRouteTableIds: The list of TransitRouterRouteTable IDs.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteTableIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteTableIds
        {
            get;
        }

        /// <summary>Attribute TransitRouterRouteTables: The list of TransitRouterRouteTables.</summary>
        [JsiiProperty(name: "attrTransitRouterRouteTables", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterRouteTables
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.TransitRouterRouteTablesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRouterRouteTablesProps Props
        {
            get;
        }

        /// <summary>Represents a `TransitRouterRouteTables`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterRouteTables), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.ITransitRouterRouteTables")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRouterRouteTables
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute TransitRouterRouteTableIds: The list of TransitRouterRouteTable IDs.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteTableIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteTableIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterRouteTables: The list of TransitRouterRouteTables.</summary>
            [JsiiProperty(name: "attrTransitRouterRouteTables", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterRouteTables
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.TransitRouterRouteTablesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRouterRouteTablesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRouterRouteTablesProps>()!;
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
