using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Query to SSM Parameter Context Provider.</summary>
    [JsiiInterface(nativeType: typeof(ISSMParameterContextQuery), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.SSMParameterContextQuery")]
    public interface ISSMParameterContextQuery
    {
        /// <summary>Query account.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
        string Account
        {
            get;
        }

        /// <summary>Parameter name to query.</summary>
        [JsiiProperty(name: "parameterName", typeJson: "{\"primitive\":\"string\"}")]
        string ParameterName
        {
            get;
        }

        /// <summary>Query region.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        string Region
        {
            get;
        }

        /// <summary>Query to SSM Parameter Context Provider.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISSMParameterContextQuery), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.SSMParameterContextQuery")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ISSMParameterContextQuery
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

            /// <summary>Parameter name to query.</summary>
            [JsiiProperty(name: "parameterName", typeJson: "{\"primitive\":\"string\"}")]
            public string ParameterName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Query region.</summary>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
            public string Region
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
