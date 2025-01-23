using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen.Datasource
{
    /// <summary>Represents a `TransitRouters`.</summary>
    [JsiiInterface(nativeType: typeof(ITransitRouters), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.ITransitRouters")]
    public interface ITransitRouters : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute TransitRouterIds: The list of TransitRouter IDs.</summary>
        [JsiiProperty(name: "attrTransitRouterIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterIds
        {
            get;
        }

        /// <summary>Attribute TransitRouters: The list of TransitRouters.</summary>
        [JsiiProperty(name: "attrTransitRouters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouters
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.TransitRoutersProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRoutersProps Props
        {
            get;
        }

        /// <summary>Represents a `TransitRouters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouters), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.ITransitRouters")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRouters
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute TransitRouterIds: The list of TransitRouter IDs.</summary>
            [JsiiProperty(name: "attrTransitRouterIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouters: The list of TransitRouters.</summary>
            [JsiiProperty(name: "attrTransitRouters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouters
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.TransitRoutersProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRoutersProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRoutersProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
