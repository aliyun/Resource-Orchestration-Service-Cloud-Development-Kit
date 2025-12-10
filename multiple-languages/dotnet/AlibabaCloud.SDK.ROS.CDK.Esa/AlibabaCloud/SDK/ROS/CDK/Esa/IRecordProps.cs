using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `Record`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-record
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RecordProps")]
    public interface IRecordProps
    {
        /// <summary>Property data: The DNS record information.</summary>
        /// <remarks>
        /// The format of this field varies based on the record type. For more information, see [References] https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
        /// </remarks>
        [JsiiProperty(name: "data", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosRecord.DataProperty\"}]}}")]
        object Data
        {
            get;
        }

        /// <summary>Property recordName: The record name.</summary>
        /// <remarks>
        /// This parameter specifies a filter condition for the query.
        /// </remarks>
        [JsiiProperty(name: "recordName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RecordName
        {
            get;
        }

        /// <summary>Property recordType: The type of the DNS record, such as A\/AAAA, CNAME, and TXT.</summary>
        [JsiiProperty(name: "recordType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RecordType
        {
            get;
        }

        /// <summary>Property siteId: The website ID.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property authConf: The origin authentication information of the CNAME record.</summary>
        [JsiiProperty(name: "authConf", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosRecord.AuthConfProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthConf
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bizName: The business scenario of the record for acceleration.</summary>
        /// <remarks>
        /// Leave the parameter empty if your record is not proxied. Valid values:
        /// image_video: video and image.
        /// api: API.
        /// web: web page.
        /// </remarks>
        [JsiiProperty(name: "bizName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BizName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property comment: The comment of the record.</summary>
        /// <remarks>
        /// The maximum length is 100 characters.
        /// </remarks>
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Comment
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hostPolicy: The origin host policy.</summary>
        /// <remarks>
        /// This policy takes effect when the record type is CNAME. You can set the policy in two modes:
        /// follow_hostname: Follow the host record.
        /// follow_origin_domain: match the origin's domain name.
        /// </remarks>
        [JsiiProperty(name: "hostPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxied: Specifies whether to proxy the record.</summary>
        /// <remarks>
        /// Only CNAME and A/AAAA records can be proxied. Valid values:
        /// true
        /// false.
        /// </remarks>
        [JsiiProperty(name: "proxied", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Proxied
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceType: The origin type for the CNAME record.</summary>
        /// <remarks>
        /// This parameter is required when you add a CNAME record. Valid values:
        /// OSS: OSS bucket.
        /// S3: S3 bucket.
        /// LB: load balancer.
        /// OP: origin pool.
        /// Domain: domain name.
        /// If you do not pass this parameter or if you leave its value empty, Domain is used by default.
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ttl: The TTL of the record.</summary>
        /// <remarks>
        /// Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
        /// </remarks>
        [JsiiProperty(name: "ttl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ttl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Record`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-record
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RecordProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRecordProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property data: The DNS record information.</summary>
            /// <remarks>
            /// The format of this field varies based on the record type. For more information, see [References] https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
            /// </remarks>
            [JsiiProperty(name: "data", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosRecord.DataProperty\"}]}}")]
            public object Data
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property recordName: The record name.</summary>
            /// <remarks>
            /// This parameter specifies a filter condition for the query.
            /// </remarks>
            [JsiiProperty(name: "recordName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RecordName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property recordType: The type of the DNS record, such as A\/AAAA, CNAME, and TXT.</summary>
            [JsiiProperty(name: "recordType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RecordType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property siteId: The website ID.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property authConf: The origin authentication information of the CNAME record.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "authConf", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosRecord.AuthConfProperty\"}]}}", isOptional: true)]
            public object? AuthConf
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bizName: The business scenario of the record for acceleration.</summary>
            /// <remarks>
            /// Leave the parameter empty if your record is not proxied. Valid values:
            /// image_video: video and image.
            /// api: API.
            /// web: web page.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bizName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BizName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property comment: The comment of the record.</summary>
            /// <remarks>
            /// The maximum length is 100 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Comment
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hostPolicy: The origin host policy.</summary>
            /// <remarks>
            /// This policy takes effect when the record type is CNAME. You can set the policy in two modes:
            /// follow_hostname: Follow the host record.
            /// follow_origin_domain: match the origin's domain name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property proxied: Specifies whether to proxy the record.</summary>
            /// <remarks>
            /// Only CNAME and A/AAAA records can be proxied. Valid values:
            /// true
            /// false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxied", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Proxied
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceType: The origin type for the CNAME record.</summary>
            /// <remarks>
            /// This parameter is required when you add a CNAME record. Valid values:
            /// OSS: OSS bucket.
            /// S3: S3 bucket.
            /// LB: load balancer.
            /// OP: origin pool.
            /// Domain: domain name.
            /// If you do not pass this parameter or if you leave its value empty, Domain is used by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ttl: The TTL of the record.</summary>
            /// <remarks>
            /// Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ttl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ttl
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
