using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Query to hosted zone context provider.</summary>
    [JsiiInterface(nativeType: typeof(IHostedZoneContextQuery), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.HostedZoneContextQuery")]
    public interface IHostedZoneContextQuery
    {
        /// <summary>Query account.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
        string Account
        {
            get;
        }

        /// <summary>The domain name e.g. example.com to lookup.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
        string DomainName
        {
            get;
        }

        /// <summary>Query region.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        string Region
        {
            get;
        }

        /// <summary>True if the zone you want to find is a private hosted zone.</summary>
        /// <remarks>
        /// <strong>Default</strong>: false
        /// </remarks>
        [JsiiProperty(name: "privateZone", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? PrivateZone
        {
            get
            {
                return null;
            }
        }

        /// <summary>The VPC ID to that the private zone must be associated with&#xD; &#xD; If you provide VPC ID and privateZone is false, this will return no results&#xD; and raise an error.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Required if privateZone=true
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Query to hosted zone context provider.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHostedZoneContextQuery), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.HostedZoneContextQuery")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IHostedZoneContextQuery
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Query account.</summary>
            [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
            public string Account
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The domain name e.g. example.com to lookup.</summary>
            [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
            public string DomainName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Query region.</summary>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
            public string Region
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>True if the zone you want to find is a private hosted zone.</summary>
            /// <remarks>
            /// <strong>Default</strong>: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateZone", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? PrivateZone
            {
                get => GetInstanceProperty<bool?>();
            }

            /// <summary>The VPC ID to that the private zone must be associated with&#xD; &#xD; If you provide VPC ID and privateZone is false, this will return no results&#xD; and raise an error.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - Required if privateZone=true
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
