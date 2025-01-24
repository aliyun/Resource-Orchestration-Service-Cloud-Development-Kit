using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Graphdatabase.Datasource
{
    /// <summary>Represents a `DbInstances`.</summary>
    [JsiiInterface(nativeType: typeof(IDbInstances), fullyQualifiedName: "@alicloud/ros-cdk-graphdatabase.datasource.IDbInstances")]
    public interface IDbInstances : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DbInstanceIds: The list of db instance IDs.</summary>
        [JsiiProperty(name: "attrDbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceIds
        {
            get;
        }

        /// <summary>Attribute DbInstances: The list of db instances.</summary>
        [JsiiProperty(name: "attrDbInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstances
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-graphdatabase.datasource.DbInstancesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Graphdatabase.Datasource.IDbInstancesProps Props
        {
            get;
        }

        /// <summary>Represents a `DbInstances`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDbInstances), fullyQualifiedName: "@alicloud/ros-cdk-graphdatabase.datasource.IDbInstances")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Graphdatabase.Datasource.IDbInstances
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DbInstanceIds: The list of db instance IDs.</summary>
            [JsiiProperty(name: "attrDbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbInstances: The list of db instances.</summary>
            [JsiiProperty(name: "attrDbInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstances
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-graphdatabase.datasource.DbInstancesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Graphdatabase.Datasource.IDbInstancesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Graphdatabase.Datasource.IDbInstancesProps>()!;
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
