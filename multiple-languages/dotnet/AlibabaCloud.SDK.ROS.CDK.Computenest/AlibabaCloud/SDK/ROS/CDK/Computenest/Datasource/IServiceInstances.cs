using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Computenest.Datasource
{
    /// <summary>Represents a `ServiceInstances`.</summary>
    [JsiiInterface(nativeType: typeof(IServiceInstances), fullyQualifiedName: "@alicloud/ros-cdk-computenest.datasource.IServiceInstances")]
    public interface IServiceInstances : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ServiceInstanceIds: The list of service instance IDs.</summary>
        [JsiiProperty(name: "attrServiceInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceInstanceIds
        {
            get;
        }

        /// <summary>Attribute ServiceInstances: The list of service instances.</summary>
        [JsiiProperty(name: "attrServiceInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceInstances
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-computenest.datasource.ServiceInstancesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Computenest.Datasource.IServiceInstancesProps Props
        {
            get;
        }

        /// <summary>Represents a `ServiceInstances`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IServiceInstances), fullyQualifiedName: "@alicloud/ros-cdk-computenest.datasource.IServiceInstances")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Computenest.Datasource.IServiceInstances
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ServiceInstanceIds: The list of service instance IDs.</summary>
            [JsiiProperty(name: "attrServiceInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceInstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceInstances: The list of service instances.</summary>
            [JsiiProperty(name: "attrServiceInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceInstances
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-computenest.datasource.ServiceInstancesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Computenest.Datasource.IServiceInstancesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Computenest.Datasource.IServiceInstancesProps>()!;
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
