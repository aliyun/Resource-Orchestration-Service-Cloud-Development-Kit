using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>A collection of validation results.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.ValidationResults), fullyQualifiedName: "@alicloud/ros-cdk-core.ValidationResults", parametersJson: "[{\"name\":\"results\",\"optional\":true,\"type\":{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.ValidationResult\"},\"kind\":\"array\"}}}]")]
    public class ValidationResults : DeputyBase
    {
        public ValidationResults(AlibabaCloud.SDK.ROS.CDK.Core.ValidationResult[]? results = null): base(new DeputyProps(new object?[]{results}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ValidationResults(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ValidationResults(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "collect", parametersJson: "[{\"name\":\"result\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ValidationResult\"}}]")]
        public virtual void Collect(AlibabaCloud.SDK.ROS.CDK.Core.ValidationResult result)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ValidationResult)}, new object[]{result});
        }

        [JsiiMethod(name: "errorTreeList", returnsJson: "{\"type\":{\"primitive\":\"string\"}}")]
        public virtual string ErrorTreeList()
        {
            return InvokeInstanceMethod<string>(new System.Type[]{}, new object[]{})!;
        }

        /// <summary>Wrap up all validation results into a single tree node.</summary>
        /// <remarks>
        /// If there are failures in the collection, add a message, otherwise
        /// return a success.
        /// </remarks>
        [JsiiMethod(name: "wrap", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ValidationResult\"}}", parametersJson: "[{\"name\":\"message\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.ValidationResult Wrap(string message)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.ValidationResult>(new System.Type[]{typeof(string)}, new object[]{message})!;
        }

        [JsiiProperty(name: "isSuccess", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool IsSuccess
        {
            get => GetInstanceProperty<bool>()!;
        }

        [JsiiProperty(name: "results", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.ValidationResult\"},\"kind\":\"array\"}}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.ValidationResult[] Results
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ValidationResult[]>()!;
            set => SetInstanceProperty(value);
        }
    }
}
