using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::DNS::DomainRecords`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDomainRecordsProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.datasource.RosDomainRecordsProps")]
    public interface IRosDomainRecordsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainName: The domain name for which you want to query DNS records.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: direction: The order in which the returned DNS records are sorted.
        /// </remarks>
        [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Direction
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The ID of the domain name group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
        /// </remarks>
        [JsiiProperty(name: "keyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyWord
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: lang: The language type.
        /// </remarks>
        [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lang
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: line: The line based on which the system queries DNS records.
        /// </remarks>
        [JsiiProperty(name: "line", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Line
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: orderBy: The method that is used to sort the returned DNS records.
        /// </remarks>
        [JsiiProperty(name: "orderBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OrderBy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.
        /// </remarks>
        [JsiiProperty(name: "rrKeyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RrKeyWord
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: searchMode: The search mode.
        /// </remarks>
        [JsiiProperty(name: "searchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SearchMode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: status: The status of the DNS records to query.
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the DNS records to query.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Type
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: typeKeyWord: The type keyword based on which the system queries DNS records.
        /// </remarks>
        [JsiiProperty(name: "typeKeyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TypeKeyWord
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: valueKeyWord: The record value keyword based on which the system queries DNS records.
        /// </remarks>
        [JsiiProperty(name: "valueKeyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ValueKeyWord
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::DNS::DomainRecords`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainRecordsProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.datasource.RosDomainRecordsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.Datasource.IRosDomainRecordsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: The domain name for which you want to query DNS records.
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: direction: The order in which the returned DNS records are sorted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Direction
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: The ID of the domain name group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyWord
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: lang: The language type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lang
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: line: The line based on which the system queries DNS records.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "line", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Line
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: orderBy: The method that is used to sort the returned DNS records.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "orderBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OrderBy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rrKeyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RrKeyWord
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: searchMode: The search mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "searchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SearchMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: status: The status of the DNS records to query.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the DNS records to query.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: typeKeyWord: The type keyword based on which the system queries DNS records.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "typeKeyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TypeKeyWord
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: valueKeyWord: The record value keyword based on which the system queries DNS records.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "valueKeyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ValueKeyWord
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
