using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosRecord`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-record
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosRecordProps")]
    public interface IRosRecordProps
    {
        /// <remarks>
        /// <strong>Property</strong>: data: The DNS record information. The format of this field varies based on the record type. For more information, see [References] https:\/\/www.alibabacloud.com\/help\/doc-detail\/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
        /// </remarks>
        [JsiiProperty(name: "data", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosRecord.DataProperty\"}]}}")]
        object Data
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: recordName: The record name. This parameter specifies a filter condition for the query.
        /// </remarks>
        [JsiiProperty(name: "recordName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RecordName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: recordType: The type of the DNS record, such as A\/AAAA, CNAME, and TXT.
        /// </remarks>
        [JsiiProperty(name: "recordType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RecordType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: siteId: The website ID.
        /// </remarks>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: authConf: The origin authentication information of the CNAME record.
        /// </remarks>
        [JsiiProperty(name: "authConf", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosRecord.AuthConfProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthConf
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: bizName: The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: comment: The comment of the record. The maximum length is 100 characters.
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

        /// <remarks>
        /// <strong>Property</strong>: hostPolicy: The origin host policy. This policy takes effect when the record type is CNAME. You can set the policy in two modes:
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

        /// <remarks>
        /// <strong>Property</strong>: proxied: Specifies whether to proxy the record. Only CNAME and A\/AAAA records can be proxied. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: sourceType: The origin type for the CNAME record. This parameter is required when you add a CNAME record. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: ttl: The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
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

        /// <summary>Properties for defining a `RosRecord`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-record
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosRecordProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosRecordProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: data: The DNS record information. The format of this field varies based on the record type. For more information, see [References] https:\/\/www.alibabacloud.com\/help\/doc-detail\/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
            /// </remarks>
            [JsiiProperty(name: "data", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosRecord.DataProperty\"}]}}")]
            public object Data
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: recordName: The record name. This parameter specifies a filter condition for the query.
            /// </remarks>
            [JsiiProperty(name: "recordName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RecordName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: recordType: The type of the DNS record, such as A\/AAAA, CNAME, and TXT.
            /// </remarks>
            [JsiiProperty(name: "recordType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RecordType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: siteId: The website ID.
            /// </remarks>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: authConf: The origin authentication information of the CNAME record.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authConf", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosRecord.AuthConfProperty\"}]}}", isOptional: true)]
            public object? AuthConf
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: bizName: The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: comment: The comment of the record. The maximum length is 100 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Comment
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: hostPolicy: The origin host policy. This policy takes effect when the record type is CNAME. You can set the policy in two modes:
            /// follow_hostname: Follow the host record.
            /// follow_origin_domain: match the origin's domain name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: proxied: Specifies whether to proxy the record. Only CNAME and A\/AAAA records can be proxied. Valid values:
            /// true
            /// false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxied", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Proxied
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceType: The origin type for the CNAME record. This parameter is required when you add a CNAME record. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: ttl: The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
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
