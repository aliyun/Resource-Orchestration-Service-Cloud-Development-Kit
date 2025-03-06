using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Represents a `DbAgent`.</summary>
    [JsiiInterface(nativeType: typeof(IDbAgent), fullyQualifiedName: "@alicloud/ros-cdk-hbr.IDbAgent")]
    public interface IDbAgent : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute InstanceIds: Uni backup agent instance ids.</summary>
        [JsiiProperty(name: "attrInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceIds
        {
            get;
        }

        /// <summary>Attribute TaskId: Uni backup agent install task id.</summary>
        [JsiiProperty(name: "attrTaskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTaskId
        {
            get;
        }

        /// <summary>Attribute UniBackupInstanceDetails: Uni backup agent instance info details.</summary>
        [JsiiProperty(name: "attrUniBackupInstanceDetails", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUniBackupInstanceDetails
        {
            get;
        }

        /// <summary>Attribute UniBackupInstances: Uni backup agent instance info.</summary>
        [JsiiProperty(name: "attrUniBackupInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUniBackupInstances
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbr.DbAgentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Hbr.IDbAgentProps Props
        {
            get;
        }

        /// <summary>Represents a `DbAgent`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDbAgent), fullyQualifiedName: "@alicloud/ros-cdk-hbr.IDbAgent")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IDbAgent
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute InstanceIds: Uni backup agent instance ids.</summary>
            [JsiiProperty(name: "attrInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TaskId: Uni backup agent install task id.</summary>
            [JsiiProperty(name: "attrTaskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTaskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UniBackupInstanceDetails: Uni backup agent instance info details.</summary>
            [JsiiProperty(name: "attrUniBackupInstanceDetails", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUniBackupInstanceDetails
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UniBackupInstances: Uni backup agent instance info.</summary>
            [JsiiProperty(name: "attrUniBackupInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUniBackupInstances
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbr.DbAgentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Hbr.IDbAgentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hbr.IDbAgentProps>()!;
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
