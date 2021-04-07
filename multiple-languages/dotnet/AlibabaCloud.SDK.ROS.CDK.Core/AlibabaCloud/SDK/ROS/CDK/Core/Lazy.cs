using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Lazily produce a value.</summary>
    /// <remarks>
    /// Can be used to return a string, list or numeric value whose actual value
    /// will only be calculated later, during synthesis.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.Lazy), fullyQualifiedName: "@alicloud/ros-cdk-core.Lazy")]
    public class Lazy : DeputyBase
    {
        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Lazy(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Lazy(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "anyValue", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"producer\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IAnyProducer\"}},{\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.LazyAnyValueOptions\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AnyValue(AlibabaCloud.SDK.ROS.CDK.Core.IAnyProducer producer, AlibabaCloud.SDK.ROS.CDK.Core.ILazyAnyValueOptions? options = null)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Lazy), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IAnyProducer), typeof(AlibabaCloud.SDK.ROS.CDK.Core.ILazyAnyValueOptions)}, new object?[]{producer, options})!;
        }

        [JsiiMethod(name: "listValue", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}", parametersJson: "[{\"name\":\"producer\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IListProducer\"}},{\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.LazyListValueOptions\"}}]")]
        public static string[] ListValue(AlibabaCloud.SDK.ROS.CDK.Core.IListProducer producer, AlibabaCloud.SDK.ROS.CDK.Core.ILazyListValueOptions? options = null)
        {
            return InvokeStaticMethod<string[]>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Lazy), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IListProducer), typeof(AlibabaCloud.SDK.ROS.CDK.Core.ILazyListValueOptions)}, new object?[]{producer, options})!;
        }

        [JsiiMethod(name: "numberValue", returnsJson: "{\"type\":{\"primitive\":\"number\"}}", parametersJson: "[{\"name\":\"producer\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.INumberProducer\"}}]")]
        public static double NumberValue(AlibabaCloud.SDK.ROS.CDK.Core.INumberProducer producer)
        {
            return InvokeStaticMethod<double>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Lazy), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.INumberProducer)}, new object[]{producer})!;
        }

        [JsiiMethod(name: "stringValue", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"producer\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IStringProducer\"}},{\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.LazyStringValueOptions\"}}]")]
        public static string StringValue(AlibabaCloud.SDK.ROS.CDK.Core.IStringProducer producer, AlibabaCloud.SDK.ROS.CDK.Core.ILazyStringValueOptions? options = null)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Lazy), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IStringProducer), typeof(AlibabaCloud.SDK.ROS.CDK.Core.ILazyStringValueOptions)}, new object?[]{producer, options})!;
        }
    }
}
