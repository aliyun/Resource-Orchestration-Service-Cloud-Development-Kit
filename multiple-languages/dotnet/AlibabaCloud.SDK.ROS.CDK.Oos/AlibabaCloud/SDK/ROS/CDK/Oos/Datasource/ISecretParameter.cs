using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos.Datasource
{
    /// <summary>Represents a `SecretParameter`.</summary>
    [JsiiInterface(nativeType: typeof(ISecretParameter), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.ISecretParameter")]
    public interface ISecretParameter : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Constraints: The constraints of the encryption parameter.</summary>
        [JsiiProperty(name: "attrConstraints", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConstraints
        {
            get;
        }

        /// <summary>Attribute CreatedBy: The user who created the encryption parameter.</summary>
        [JsiiProperty(name: "attrCreatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreatedBy
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the encryption parameter was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: The description of the encryption parameter.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute KeyId: The ID of the key of Key Management Service (KMS) that is used for encryption.</summary>
        [JsiiProperty(name: "attrKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKeyId
        {
            get;
        }

        /// <summary>Attribute ParameterVersion: The version number of the encryption parameter.</summary>
        [JsiiProperty(name: "attrParameterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameterVersion
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SecretParameterId: The ID of the encryption parameter.</summary>
        [JsiiProperty(name: "attrSecretParameterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecretParameterId
        {
            get;
        }

        /// <summary>Attribute SecretParameterName: The name of the parameter.</summary>
        [JsiiProperty(name: "attrSecretParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecretParameterName
        {
            get;
        }

        /// <summary>Attribute ShareType: The share type of the encryption parameter.</summary>
        [JsiiProperty(name: "attrShareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrShareType
        {
            get;
        }

        /// <summary>Attribute Tags: The tags of the parameter.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute Type: The type of the parameter.</summary>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrType
        {
            get;
        }

        /// <summary>Attribute UpdatedBy: The user who updated the encryption parameter.</summary>
        [JsiiProperty(name: "attrUpdatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdatedBy
        {
            get;
        }

        /// <summary>Attribute UpdatedDate: The time when the encryption parameter was updated.</summary>
        [JsiiProperty(name: "attrUpdatedDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdatedDate
        {
            get;
        }

        /// <summary>Attribute Value: The value of the encryption parameter.</summary>
        [JsiiProperty(name: "attrValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrValue
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.datasource.SecretParameterProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.ISecretParameterProps Props
        {
            get;
        }

        /// <summary>Represents a `SecretParameter`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISecretParameter), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.ISecretParameter")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.ISecretParameter
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Constraints: The constraints of the encryption parameter.</summary>
            [JsiiProperty(name: "attrConstraints", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConstraints
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreatedBy: The user who created the encryption parameter.</summary>
            [JsiiProperty(name: "attrCreatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreatedBy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the encryption parameter was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the encryption parameter.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KeyId: The ID of the key of Key Management Service (KMS) that is used for encryption.</summary>
            [JsiiProperty(name: "attrKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKeyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ParameterVersion: The version number of the encryption parameter.</summary>
            [JsiiProperty(name: "attrParameterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameterVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecretParameterId: The ID of the encryption parameter.</summary>
            [JsiiProperty(name: "attrSecretParameterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecretParameterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecretParameterName: The name of the parameter.</summary>
            [JsiiProperty(name: "attrSecretParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecretParameterName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ShareType: The share type of the encryption parameter.</summary>
            [JsiiProperty(name: "attrShareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrShareType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags of the parameter.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Type: The type of the parameter.</summary>
            [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdatedBy: The user who updated the encryption parameter.</summary>
            [JsiiProperty(name: "attrUpdatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdatedBy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdatedDate: The time when the encryption parameter was updated.</summary>
            [JsiiProperty(name: "attrUpdatedDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdatedDate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Value: The value of the encryption parameter.</summary>
            [JsiiProperty(name: "attrValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrValue
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.datasource.SecretParameterProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.ISecretParameterProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.ISecretParameterProps>()!;
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
