using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Query input for looking up a VPC.</summary>
    [JsiiInterface(nativeType: typeof(IVpcContextQuery), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.VpcContextQuery")]
    public interface IVpcContextQuery
    {
        /// <summary>Query account.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
        string Account
        {
            get;
        }

        /// <summary>Filters to apply to the VPC.</summary>
        /// <remarks>
        /// Filter parameters are the same as passed to DescribeVpcs.
        /// </remarks>
        [JsiiProperty(name: "filter", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}")]
        System.Collections.Generic.IDictionary<string, string> Filter
        {
            get;
        }

        /// <summary>Query region.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        string Region
        {
            get;
        }

        /// <summary>Whether to populate the subnetGroups field of the {@link VpcContextResponse}, which contains potentially asymmetric subnet groups.</summary>
        /// <remarks>
        /// <strong>Default</strong>: false
        /// </remarks>
        [JsiiProperty(name: "returnAsymmetricSubnets", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? ReturnAsymmetricSubnets
        {
            get
            {
                return null;
            }
        }

        /// <summary>Optional tag for subnet group name.</summary>
        /// <remarks>
        /// If not provided, we'll look at the ros-cdk:subnet-name tag.
        /// If the subnet does not have the specified tag,
        /// we'll use its type as the name.
        ///
        /// <strong>Default</strong>: 'ros-cdk:subnet-name'
        /// </remarks>
        [JsiiProperty(name: "subnetGroupNameTag", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SubnetGroupNameTag
        {
            get
            {
                return null;
            }
        }

        /// <summary>Query input for looking up a VPC.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpcContextQuery), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.VpcContextQuery")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IVpcContextQuery
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

            /// <summary>Filters to apply to the VPC.</summary>
            /// <remarks>
            /// Filter parameters are the same as passed to DescribeVpcs.
            /// </remarks>
            [JsiiProperty(name: "filter", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}")]
            public System.Collections.Generic.IDictionary<string, string> Filter
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, string>>()!;
            }

            /// <summary>Query region.</summary>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
            public string Region
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Whether to populate the subnetGroups field of the {@link VpcContextResponse}, which contains potentially asymmetric subnet groups.</summary>
            /// <remarks>
            /// <strong>Default</strong>: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "returnAsymmetricSubnets", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? ReturnAsymmetricSubnets
            {
                get => GetInstanceProperty<bool?>();
            }

            /// <summary>Optional tag for subnet group name.</summary>
            /// <remarks>
            /// If not provided, we'll look at the ros-cdk:subnet-name tag.
            /// If the subnet does not have the specified tag,
            /// we'll use its type as the name.
            ///
            /// <strong>Default</strong>: 'ros-cdk:subnet-name'
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "subnetGroupNameTag", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SubnetGroupNameTag
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
