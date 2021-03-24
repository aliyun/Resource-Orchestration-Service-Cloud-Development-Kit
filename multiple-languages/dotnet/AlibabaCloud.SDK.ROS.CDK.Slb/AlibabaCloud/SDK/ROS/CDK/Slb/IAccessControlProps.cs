using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `ALIYUN::SLB::AccessControl`.</summary>
    [JsiiInterface(nativeType: typeof(IAccessControlProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.AccessControlProps")]
    public interface IAccessControlProps
    {
        /// <summary>Property aclName: The name of the access control list.</summary>
        [JsiiProperty(name: "aclName", typeJson: "{\"primitive\":\"string\"}")]
        string AclName
        {
            get;
        }

        /// <summary>Property aclEntrys: A list of acl entrys.</summary>
        /// <remarks>
        /// Each entry can be IP addresses or CIDR blocks. Max length: 50.
        /// </remarks>
        [JsiiProperty(name: "aclEntrys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosAccessControl.AclEntrysProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AclEntrys
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property addressIpVersion: IP version.</summary>
        /// <remarks>
        /// Could be "ipv4" or "ipv6".
        /// </remarks>
        [JsiiProperty(name: "addressIpVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AddressIpVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SLB::AccessControl`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccessControlProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.AccessControlProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IAccessControlProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aclName: The name of the access control list.</summary>
            [JsiiProperty(name: "aclName", typeJson: "{\"primitive\":\"string\"}")]
            public string AclName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property aclEntrys: A list of acl entrys.</summary>
            /// <remarks>
            /// Each entry can be IP addresses or CIDR blocks. Max length: 50.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aclEntrys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosAccessControl.AclEntrysProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AclEntrys
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property addressIpVersion: IP version.</summary>
            /// <remarks>
            /// Could be "ipv4" or "ipv6".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressIpVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AddressIpVersion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }
        }
    }
}
