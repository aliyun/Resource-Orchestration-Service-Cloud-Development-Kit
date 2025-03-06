using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen.Datasource
{
    /// <summary>Represents a `CenInstances`.</summary>
    [JsiiInterface(nativeType: typeof(ICenInstances), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.ICenInstances")]
    public interface ICenInstances : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CenIds: The list of The Cen instance ids.</summary>
        [JsiiProperty(name: "attrCenIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCenIds
        {
            get;
        }

        /// <summary>Attribute Cens: The information about Cens.</summary>
        [JsiiProperty(name: "attrCens", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCens
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.CenInstancesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ICenInstancesProps Props
        {
            get;
        }

        /// <summary>Represents a `CenInstances`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICenInstances), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.ICenInstances")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ICenInstances
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CenIds: The list of The Cen instance ids.</summary>
            [JsiiProperty(name: "attrCenIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCenIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Cens: The information about Cens.</summary>
            [JsiiProperty(name: "attrCens", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCens
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.CenInstancesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ICenInstancesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ICenInstancesProps>()!;
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
