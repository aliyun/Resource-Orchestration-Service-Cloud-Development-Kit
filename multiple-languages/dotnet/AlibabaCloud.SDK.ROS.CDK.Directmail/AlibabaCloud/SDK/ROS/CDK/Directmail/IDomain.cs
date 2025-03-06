using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Directmail
{
    /// <summary>Represents a `Domain`.</summary>
    [JsiiInterface(nativeType: typeof(IDomain), fullyQualifiedName: "@alicloud/ros-cdk-directmail.IDomain")]
    public interface IDomain : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CnameAuthStatus: Cname auth status.</summary>
        [JsiiProperty(name: "attrCnameAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCnameAuthStatus
        {
            get;
        }

        /// <summary>Attribute CnameConfirmStatus: Cname confirm status.</summary>
        [JsiiProperty(name: "attrCnameConfirmStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCnameConfirmStatus
        {
            get;
        }

        /// <summary>Attribute CnameRecord: Cname record.</summary>
        [JsiiProperty(name: "attrCnameRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCnameRecord
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the domain.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DefaultDomain: Default domain.</summary>
        [JsiiProperty(name: "attrDefaultDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDefaultDomain
        {
            get;
        }

        /// <summary>Attribute DnsMx: DNS MX.</summary>
        [JsiiProperty(name: "attrDnsMx", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDnsMx
        {
            get;
        }

        /// <summary>Attribute DnsSpf: DNS SPF.</summary>
        [JsiiProperty(name: "attrDnsSpf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDnsSpf
        {
            get;
        }

        /// <summary>Attribute DnsTxt: DNS txt.</summary>
        [JsiiProperty(name: "attrDnsTxt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDnsTxt
        {
            get;
        }

        /// <summary>Attribute DomainId: The ID of the domain.</summary>
        [JsiiProperty(name: "attrDomainId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomainId
        {
            get;
        }

        /// <summary>Attribute DomainName: The name of the domain.</summary>
        [JsiiProperty(name: "attrDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomainName
        {
            get;
        }

        /// <summary>Attribute DomainType: The type of the domain.</summary>
        [JsiiProperty(name: "attrDomainType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomainType
        {
            get;
        }

        /// <summary>Attribute IcpStatus: ICP status.</summary>
        [JsiiProperty(name: "attrIcpStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIcpStatus
        {
            get;
        }

        /// <summary>Attribute MxAuthStatus: MX auth status.</summary>
        [JsiiProperty(name: "attrMxAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMxAuthStatus
        {
            get;
        }

        /// <summary>Attribute MxRecord: MX Record.</summary>
        [JsiiProperty(name: "attrMxRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMxRecord
        {
            get;
        }

        /// <summary>Attribute SpfAuthStatus: SPF auth status.</summary>
        [JsiiProperty(name: "attrSpfAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpfAuthStatus
        {
            get;
        }

        /// <summary>Attribute SpfRecord: SPF record.</summary>
        [JsiiProperty(name: "attrSpfRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpfRecord
        {
            get;
        }

        /// <summary>Attribute TlDomainName: TL domain name.</summary>
        [JsiiProperty(name: "attrTlDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTlDomainName
        {
            get;
        }

        /// <summary>Attribute TracefRecord: Tracef Record.</summary>
        [JsiiProperty(name: "attrTracefRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTracefRecord
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-directmail.DomainProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Directmail.IDomainProps Props
        {
            get;
        }

        /// <summary>Represents a `Domain`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomain), fullyQualifiedName: "@alicloud/ros-cdk-directmail.IDomain")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Directmail.IDomain
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CnameAuthStatus: Cname auth status.</summary>
            [JsiiProperty(name: "attrCnameAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCnameAuthStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CnameConfirmStatus: Cname confirm status.</summary>
            [JsiiProperty(name: "attrCnameConfirmStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCnameConfirmStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CnameRecord: Cname record.</summary>
            [JsiiProperty(name: "attrCnameRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCnameRecord
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the domain.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DefaultDomain: Default domain.</summary>
            [JsiiProperty(name: "attrDefaultDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDefaultDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DnsMx: DNS MX.</summary>
            [JsiiProperty(name: "attrDnsMx", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDnsMx
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DnsSpf: DNS SPF.</summary>
            [JsiiProperty(name: "attrDnsSpf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDnsSpf
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DnsTxt: DNS txt.</summary>
            [JsiiProperty(name: "attrDnsTxt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDnsTxt
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DomainId: The ID of the domain.</summary>
            [JsiiProperty(name: "attrDomainId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomainId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DomainName: The name of the domain.</summary>
            [JsiiProperty(name: "attrDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DomainType: The type of the domain.</summary>
            [JsiiProperty(name: "attrDomainType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomainType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IcpStatus: ICP status.</summary>
            [JsiiProperty(name: "attrIcpStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIcpStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MxAuthStatus: MX auth status.</summary>
            [JsiiProperty(name: "attrMxAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMxAuthStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MxRecord: MX Record.</summary>
            [JsiiProperty(name: "attrMxRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMxRecord
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SpfAuthStatus: SPF auth status.</summary>
            [JsiiProperty(name: "attrSpfAuthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpfAuthStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SpfRecord: SPF record.</summary>
            [JsiiProperty(name: "attrSpfRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpfRecord
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TlDomainName: TL domain name.</summary>
            [JsiiProperty(name: "attrTlDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTlDomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TracefRecord: Tracef Record.</summary>
            [JsiiProperty(name: "attrTracefRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTracefRecord
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-directmail.DomainProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Directmail.IDomainProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Directmail.IDomainProps>()!;
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
