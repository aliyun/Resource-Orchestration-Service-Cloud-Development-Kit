using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `Record`.</summary>
    [JsiiInterface(nativeType: typeof(IRecord), fullyQualifiedName: "@alicloud/ros-cdk-esa.IRecord")]
    public interface IRecord : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AuthConf: The origin authentication information of the CNAME record.</summary>
        [JsiiProperty(name: "attrAuthConf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAuthConf
        {
            get;
        }

        /// <summary>Attribute BizName: The business scenario of the record for acceleration.</summary>
        /// <remarks>
        /// Leave the parameter empty if your record is not proxied.
        /// </remarks>
        [JsiiProperty(name: "attrBizName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBizName
        {
            get;
        }

        /// <summary>Attribute Comment: The comment of the record.</summary>
        /// <remarks>
        /// The maximum length is 100 characters.
        /// </remarks>
        [JsiiProperty(name: "attrComment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrComment
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the record was created.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Data: The DNS record information.</summary>
        /// <remarks>
        /// The format of this field varies based on the record type. For more information, see [References]https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
        /// </remarks>
        [JsiiProperty(name: "attrData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrData
        {
            get;
        }

        /// <summary>Attribute HostPolicy: The origin host policy.</summary>
        /// <remarks>
        /// This policy takes effect when the record type is CNAME.
        /// </remarks>
        [JsiiProperty(name: "attrHostPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostPolicy
        {
            get;
        }

        /// <summary>Attribute ModifyTime: The time when the record was updated.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrModifyTime
        {
            get;
        }

        /// <summary>Attribute Proxied: Specifies whether to proxy the record.</summary>
        /// <remarks>
        /// Only CNAME and A/AAAA records can be proxied.
        /// </remarks>
        [JsiiProperty(name: "attrProxied", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProxied
        {
            get;
        }

        /// <summary>Attribute RecordCname: The CNAME.</summary>
        /// <remarks>
        /// If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
        /// </remarks>
        [JsiiProperty(name: "attrRecordCname", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRecordCname
        {
            get;
        }

        /// <summary>Attribute RecordId: Record Id.</summary>
        [JsiiProperty(name: "attrRecordId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRecordId
        {
            get;
        }

        /// <summary>Attribute RecordName: The record name.</summary>
        /// <remarks>
        /// This parameter specifies a filter condition for the query.
        /// </remarks>
        [JsiiProperty(name: "attrRecordName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRecordName
        {
            get;
        }

        /// <summary>Attribute RecordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT.</summary>
        [JsiiProperty(name: "attrRecordType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRecordType
        {
            get;
        }

        /// <summary>Attribute SiteId: The website ID.</summary>
        [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteId
        {
            get;
        }

        /// <summary>Attribute SiteName: The website name.</summary>
        [JsiiProperty(name: "attrSiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteName
        {
            get;
        }

        /// <summary>Attribute SourceType: The origin type for the CNAME record.</summary>
        /// <remarks>
        /// This parameter is required when you add a CNAME record.
        /// </remarks>
        [JsiiProperty(name: "attrSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceType
        {
            get;
        }

        /// <summary>Attribute Ttl: The TTL of the record.</summary>
        /// <remarks>
        /// Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
        /// </remarks>
        [JsiiProperty(name: "attrTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTtl
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.RecordProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IRecordProps Props
        {
            get;
        }

        /// <summary>Represents a `Record`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRecord), fullyQualifiedName: "@alicloud/ros-cdk-esa.IRecord")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRecord
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AuthConf: The origin authentication information of the CNAME record.</summary>
            [JsiiProperty(name: "attrAuthConf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAuthConf
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BizName: The business scenario of the record for acceleration.</summary>
            /// <remarks>
            /// Leave the parameter empty if your record is not proxied.
            /// </remarks>
            [JsiiProperty(name: "attrBizName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBizName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Comment: The comment of the record.</summary>
            /// <remarks>
            /// The maximum length is 100 characters.
            /// </remarks>
            [JsiiProperty(name: "attrComment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrComment
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the record was created.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Data: The DNS record information.</summary>
            /// <remarks>
            /// The format of this field varies based on the record type. For more information, see [References]https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
            /// </remarks>
            [JsiiProperty(name: "attrData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostPolicy: The origin host policy.</summary>
            /// <remarks>
            /// This policy takes effect when the record type is CNAME.
            /// </remarks>
            [JsiiProperty(name: "attrHostPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostPolicy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ModifyTime: The time when the record was updated.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "attrModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrModifyTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Proxied: Specifies whether to proxy the record.</summary>
            /// <remarks>
            /// Only CNAME and A/AAAA records can be proxied.
            /// </remarks>
            [JsiiProperty(name: "attrProxied", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProxied
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RecordCname: The CNAME.</summary>
            /// <remarks>
            /// If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
            /// </remarks>
            [JsiiProperty(name: "attrRecordCname", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRecordCname
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RecordId: Record Id.</summary>
            [JsiiProperty(name: "attrRecordId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRecordId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RecordName: The record name.</summary>
            /// <remarks>
            /// This parameter specifies a filter condition for the query.
            /// </remarks>
            [JsiiProperty(name: "attrRecordName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRecordName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RecordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT.</summary>
            [JsiiProperty(name: "attrRecordType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRecordType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteId: The website ID.</summary>
            [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteName: The website name.</summary>
            [JsiiProperty(name: "attrSiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceType: The origin type for the CNAME record.</summary>
            /// <remarks>
            /// This parameter is required when you add a CNAME record.
            /// </remarks>
            [JsiiProperty(name: "attrSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ttl: The TTL of the record.</summary>
            /// <remarks>
            /// Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
            /// </remarks>
            [JsiiProperty(name: "attrTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTtl
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.RecordProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IRecordProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IRecordProps>()!;
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
