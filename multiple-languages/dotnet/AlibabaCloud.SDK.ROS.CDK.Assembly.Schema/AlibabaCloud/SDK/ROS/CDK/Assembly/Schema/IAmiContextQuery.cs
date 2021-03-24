using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Query to AMI context provider.</summary>
    [JsiiInterface(nativeType: typeof(IAmiContextQuery), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AmiContextQuery")]
    public interface IAmiContextQuery
    {
        /// <summary>Account to query.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
        string Account
        {
            get;
        }

        /// <summary>Filters to DescribeImages call.</summary>
        [JsiiProperty(name: "filters", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}},\"kind\":\"map\"}}")]
        System.Collections.Generic.IDictionary<string, string[]> Filters
        {
            get;
        }

        /// <summary>Region to query.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        string Region
        {
            get;
        }

        /// <summary>Owners to DescribeImages call.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - All owners
        /// </remarks>
        [JsiiProperty(name: "owners", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? Owners
        {
            get
            {
                return null;
            }
        }

        /// <summary>Query to AMI context provider.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAmiContextQuery), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AmiContextQuery")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAmiContextQuery
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Account to query.</summary>
            [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
            public string Account
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Filters to DescribeImages call.</summary>
            [JsiiProperty(name: "filters", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}},\"kind\":\"map\"}}")]
            public System.Collections.Generic.IDictionary<string, string[]> Filters
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, string[]>>()!;
            }

            /// <summary>Region to query.</summary>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
            public string Region
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Owners to DescribeImages call.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - All owners
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "owners", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Owners
            {
                get => GetInstanceProperty<string[]?>();
            }
        }
    }
}
