using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Represents a `SCIMServerCredential`.</summary>
    [JsiiInterface(nativeType: typeof(ISCIMServerCredential), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.ISCIMServerCredential")]
    public interface ISCIMServerCredential : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CredentialId: The ID of the SCIM credential.</summary>
        [JsiiProperty(name: "attrCredentialId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCredentialId
        {
            get;
        }

        /// <summary>Attribute CredentialSecret: The secret of the SCIM credential.</summary>
        [JsiiProperty(name: "attrCredentialSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCredentialSecret
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudsso.SCIMServerCredentialProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cloudsso.ISCIMServerCredentialProps Props
        {
            get;
        }

        /// <summary>Represents a `SCIMServerCredential`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISCIMServerCredential), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.ISCIMServerCredential")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.ISCIMServerCredential
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CredentialId: The ID of the SCIM credential.</summary>
            [JsiiProperty(name: "attrCredentialId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCredentialId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CredentialSecret: The secret of the SCIM credential.</summary>
            [JsiiProperty(name: "attrCredentialSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCredentialSecret
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudsso.SCIMServerCredentialProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cloudsso.ISCIMServerCredentialProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cloudsso.ISCIMServerCredentialProps>()!;
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
