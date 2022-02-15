using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    #pragma warning disable CS8618

    /// <summary>An error returned during the validation phase.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.ValidationError")]
    public class ValidationError : AlibabaCloud.SDK.ROS.CDK.Core.IValidationError
    {
        /// <summary>The error message.</summary>
        [JsiiProperty(name: "message", typeJson: "{\"primitive\":\"string\"}")]
        public string Message
        {
            get;
            set;
        }

        /// <summary>The construct which emitted the error.</summary>
        [JsiiProperty(name: "source", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        public AlibabaCloud.SDK.ROS.CDK.Core.Construct Source
        {
            get;
            set;
        }
    }
}
