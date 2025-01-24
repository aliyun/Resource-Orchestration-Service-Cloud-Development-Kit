using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis.Datasource
{
    /// <summary>Represents a `InstanceClasses`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceClasses), fullyQualifiedName: "@alicloud/ros-cdk-redis.datasource.IInstanceClasses")]
    public interface IInstanceClasses : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute InstanceClasses: The list of instance classes.</summary>
        [JsiiProperty(name: "attrInstanceClasses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceClasses
        {
            get;
        }

        /// <summary>Attribute InstanceClassIds: The list of db instance class ids.</summary>
        [JsiiProperty(name: "attrInstanceClassIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceClassIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-redis.datasource.InstanceClassesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstanceClassesProps Props
        {
            get;
        }

        /// <summary>Represents a `InstanceClasses`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstanceClasses), fullyQualifiedName: "@alicloud/ros-cdk-redis.datasource.IInstanceClasses")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstanceClasses
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute InstanceClasses: The list of instance classes.</summary>
            [JsiiProperty(name: "attrInstanceClasses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceClasses
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceClassIds: The list of db instance class ids.</summary>
            [JsiiProperty(name: "attrInstanceClassIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceClassIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-redis.datasource.InstanceClassesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstanceClassesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstanceClassesProps>()!;
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
