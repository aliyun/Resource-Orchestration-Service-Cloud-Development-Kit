using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Representation of validation results.</summary>
    /// <remarks>
    /// Models a tree of validation errors so that we have as much information as possible
    /// about the failure that occurred.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.ValidationResult), fullyQualifiedName: "@alicloud/ros-cdk-core.ValidationResult", parametersJson: "[{\"name\":\"errorMessage\",\"optional\":true,\"type\":{\"primitive\":\"string\"}},{\"name\":\"results\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ValidationResults\"}}]")]
    public class ValidationResult : DeputyBase
    {
        public ValidationResult(string? errorMessage = null, AlibabaCloud.SDK.ROS.CDK.Core.ValidationResults? results = null): base(_MakeDeputyProps(errorMessage, results))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(string? errorMessage = null, AlibabaCloud.SDK.ROS.CDK.Core.ValidationResults? results = null)
        {
            return new DeputyProps(new object?[]{errorMessage, results});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ValidationResult(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ValidationResult(DeputyProps props): base(props)
        {
        }

        /// <summary>Turn a failed validation into an exception.</summary>
        [JsiiMethod(name: "assertSuccess")]
        public virtual void AssertSuccess()
        {
            InvokeInstanceVoidMethod(new System.Type[]{}, new object[]{});
        }

        /// <summary>Return a string rendering of the tree of validation failures.</summary>
        [JsiiMethod(name: "errorTree", returnsJson: "{\"type\":{\"primitive\":\"string\"}}")]
        public virtual string ErrorTree()
        {
            return InvokeInstanceMethod<string>(new System.Type[]{}, new object[]{})!;
        }

        /// <summary>Wrap this result with an error message, if it concerns an error.</summary>
        [JsiiMethod(name: "prefix", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ValidationResult\"}}", parametersJson: "[{\"name\":\"message\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.ValidationResult Prefix(string message)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.ValidationResult>(new System.Type[]{typeof(string)}, new object[]{message})!;
        }

        [JsiiProperty(name: "errorMessage", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ErrorMessage
        {
            get => GetInstanceProperty<string>()!;
        }

        [JsiiProperty(name: "isSuccess", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool IsSuccess
        {
            get => GetInstanceProperty<bool>()!;
        }

        [JsiiProperty(name: "results", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ValidationResults\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.ValidationResults Results
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ValidationResults>()!;
        }
    }
}
