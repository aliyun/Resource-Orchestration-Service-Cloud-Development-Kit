using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns.Datasource
{
    /// <summary>Properties for defining a `DomainRecords`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domainrecords
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDomainRecordsProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.datasource.DomainRecordsProps")]
    public interface IDomainRecordsProps
    {
        /// <summary>Property domainName: The domain name for which you want to query DNS records.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Property direction: The order in which the returned DNS records are sorted.</summary>
        [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Direction
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property groupId: The ID of the domain name group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyWord: The keyword for searches in "%KeyWord%" mode.</summary>
        /// <remarks>
        /// The value is not case-sensitive.
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

        /// <summary>Property lang: The language type.</summary>
        [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lang
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property line: The line based on which the system queries DNS records.</summary>
        [JsiiProperty(name: "line", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Line
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property orderBy: The method that is used to sort the returned DNS records.</summary>
        [JsiiProperty(name: "orderBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OrderBy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.</summary>
        [JsiiProperty(name: "rrKeyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RrKeyWord
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property searchMode: The search mode.</summary>
        [JsiiProperty(name: "searchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SearchMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The status of the DNS records to query.</summary>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property type: The type of the DNS records to query.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Type
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property typeKeyWord: The type keyword based on which the system queries DNS records.</summary>
        [JsiiProperty(name: "typeKeyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TypeKeyWord
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property valueKeyWord: The record value keyword based on which the system queries DNS records.</summary>
        [JsiiProperty(name: "valueKeyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ValueKeyWord
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DomainRecords`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domainrecords
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDomainRecordsProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.datasource.DomainRecordsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.Datasource.IDomainRecordsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainName: The domain name for which you want to query DNS records.</summary>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property direction: The order in which the returned DNS records are sorted.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Direction
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property groupId: The ID of the domain name group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keyWord: The keyword for searches in "%KeyWord%" mode.</summary>
            /// <remarks>
            /// The value is not case-sensitive.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyWord
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property lang: The language type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lang
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property line: The line based on which the system queries DNS records.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "line", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Line
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property orderBy: The method that is used to sort the returned DNS records.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "orderBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OrderBy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "rrKeyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RrKeyWord
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property searchMode: The search mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "searchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SearchMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The status of the DNS records to query.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property type: The type of the DNS records to query.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property typeKeyWord: The type keyword based on which the system queries DNS records.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "typeKeyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TypeKeyWord
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property valueKeyWord: The record value keyword based on which the system queries DNS records.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "valueKeyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ValueKeyWord
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
