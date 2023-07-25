using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::GA::Acls`.</summary>
    [JsiiInterface(nativeType: typeof(IAclsProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.datasource.AclsProps")]
    public interface IAclsProps
    {
        /// <summary>Property aclId: The  ID of the Acl.</summary>
        [JsiiProperty(name: "aclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AclId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property aclName: The name of the acl.</summary>
        [JsiiProperty(name: "aclName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AclName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::GA::Acls`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAclsProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.datasource.AclsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.Datasource.IAclsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aclId: The  ID of the Acl.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "aclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AclId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property aclName: The name of the acl.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "aclName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AclName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
