using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource
{
    /// <summary>Represents a `Domain`.</summary>
    [JsiiInterface(nativeType: typeof(IDomain), fullyQualifiedName: "@alicloud/ros-cdk-directmail.datasource.IDomain")]
    public interface IDomain : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CnameAuthStatus: Whether the host record of CNAME has been changed.</summary>
        [JsiiProperty(name: "attrCnameAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCnameAuthStatus
        {
            get;
        }

        /// <summary>Attribute CnameConfirmStatus: Whether the host record of CNAME has been changed.</summary>
        [JsiiProperty(name: "attrCnameConfirmStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCnameConfirmStatus
        {
            get;
        }

        /// <summary>Attribute CnameRecord: Customized part of CNAME host record.</summary>
        [JsiiProperty(name: "attrCnameRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCnameRecord
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the resource.The time when the DNS record was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DefaultDomain: Is it the default domain name.</summary>
        [JsiiProperty(name: "attrDefaultDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDefaultDomain
        {
            get;
        }

        /// <summary>Attribute DnsMx: MX record value resolved through public DNS.</summary>
        [JsiiProperty(name: "attrDnsMx", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDnsMx
        {
            get;
        }

        /// <summary>Attribute DnsSpf: SPF record value resolved through public DNS.</summary>
        [JsiiProperty(name: "attrDnsSpf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDnsSpf
        {
            get;
        }

        /// <summary>Attribute DnsTxt: TXT record value resolved through public DNS.</summary>
        [JsiiProperty(name: "attrDnsTxt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDnsTxt
        {
            get;
        }

        /// <summary>Attribute DomainId: The ID of the domain name.</summary>
        [JsiiProperty(name: "attrDomainId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomainId
        {
            get;
        }

        /// <summary>Attribute DomainName: The domain name.</summary>
        [JsiiProperty(name: "attrDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomainName
        {
            get;
        }

        /// <summary>Attribute DomainType: TXT records provided by the Direct Mail console.</summary>
        [JsiiProperty(name: "attrDomainType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomainType
        {
            get;
        }

        /// <summary>Attribute IcpStatus: The status of ICP filing.</summary>
        [JsiiProperty(name: "attrIcpStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIcpStatus
        {
            get;
        }

        /// <summary>Attribute MxAuthStatus: Indicates whether the MX record is successfully verified.</summary>
        [JsiiProperty(name: "attrMxAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMxAuthStatus
        {
            get;
        }

        /// <summary>Attribute MxRecord: MX records provided by the Direct Mail console.</summary>
        [JsiiProperty(name: "attrMxRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMxRecord
        {
            get;
        }

        /// <summary>Attribute SpfAuthStatus: Indicates whether the SPF record is successfully verified.</summary>
        [JsiiProperty(name: "attrSpfAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpfAuthStatus
        {
            get;
        }

        /// <summary>Attribute SpfRecord: Spf records provided by the Direct Mail console.</summary>
        [JsiiProperty(name: "attrSpfRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpfRecord
        {
            get;
        }

        /// <summary>Attribute TlDomainName: The primary domain name.</summary>
        [JsiiProperty(name: "attrTlDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTlDomainName
        {
            get;
        }

        /// <summary>Attribute TracefRecord: The CNAME verification record provided by the Direct Mail console.</summary>
        [JsiiProperty(name: "attrTracefRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTracefRecord
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-directmail.datasource.DomainProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IDomainProps Props
        {
            get;
        }

        /// <summary>Represents a `Domain`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomain), fullyQualifiedName: "@alicloud/ros-cdk-directmail.datasource.IDomain")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IDomain
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CnameAuthStatus: Whether the host record of CNAME has been changed.</summary>
            [JsiiProperty(name: "attrCnameAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCnameAuthStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CnameConfirmStatus: Whether the host record of CNAME has been changed.</summary>
            [JsiiProperty(name: "attrCnameConfirmStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCnameConfirmStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CnameRecord: Customized part of CNAME host record.</summary>
            [JsiiProperty(name: "attrCnameRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCnameRecord
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the resource.The time when the DNS record was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DefaultDomain: Is it the default domain name.</summary>
            [JsiiProperty(name: "attrDefaultDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDefaultDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DnsMx: MX record value resolved through public DNS.</summary>
            [JsiiProperty(name: "attrDnsMx", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDnsMx
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DnsSpf: SPF record value resolved through public DNS.</summary>
            [JsiiProperty(name: "attrDnsSpf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDnsSpf
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DnsTxt: TXT record value resolved through public DNS.</summary>
            [JsiiProperty(name: "attrDnsTxt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDnsTxt
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DomainId: The ID of the domain name.</summary>
            [JsiiProperty(name: "attrDomainId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomainId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DomainName: The domain name.</summary>
            [JsiiProperty(name: "attrDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DomainType: TXT records provided by the Direct Mail console.</summary>
            [JsiiProperty(name: "attrDomainType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomainType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IcpStatus: The status of ICP filing.</summary>
            [JsiiProperty(name: "attrIcpStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIcpStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MxAuthStatus: Indicates whether the MX record is successfully verified.</summary>
            [JsiiProperty(name: "attrMxAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMxAuthStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MxRecord: MX records provided by the Direct Mail console.</summary>
            [JsiiProperty(name: "attrMxRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMxRecord
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SpfAuthStatus: Indicates whether the SPF record is successfully verified.</summary>
            [JsiiProperty(name: "attrSpfAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpfAuthStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SpfRecord: Spf records provided by the Direct Mail console.</summary>
            [JsiiProperty(name: "attrSpfRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpfRecord
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TlDomainName: The primary domain name.</summary>
            [JsiiProperty(name: "attrTlDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTlDomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TracefRecord: The CNAME verification record provided by the Direct Mail console.</summary>
            [JsiiProperty(name: "attrTracefRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTracefRecord
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-directmail.datasource.DomainProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IDomainProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IDomainProps>()!;
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
