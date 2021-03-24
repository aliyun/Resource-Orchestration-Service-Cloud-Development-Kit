using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Artifact properties for ROS stacks.</summary>
    [JsiiInterface(nativeType: typeof(IAliyunRosStackProperties), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AliyunRosStackProperties")]
    public interface IAliyunRosStackProperties
    {
        /// <summary>A file relative to the assembly root which contains the ROS template for this stack.</summary>
        [JsiiProperty(name: "templateFile", typeJson: "{\"primitive\":\"string\"}")]
        string TemplateFile
        {
            get;
        }

        /// <summary>Values for ROS stack parameters that should be passed when the stack is deployed.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No parameters
        /// </remarks>
        [JsiiProperty(name: "parameters", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, string>? Parameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>The name to use for the ROS stack.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - name derived from artifact ID
        /// </remarks>
        [JsiiProperty(name: "stackName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? StackName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Artifact properties for ROS stacks.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAliyunRosStackProperties), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AliyunRosStackProperties")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAliyunRosStackProperties
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>A file relative to the assembly root which contains the ROS template for this stack.</summary>
            [JsiiProperty(name: "templateFile", typeJson: "{\"primitive\":\"string\"}")]
            public string TemplateFile
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Values for ROS stack parameters that should be passed when the stack is deployed.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - No parameters
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, string>? Parameters
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, string>?>();
            }

            /// <summary>The name to use for the ROS stack.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - name derived from artifact ID
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stackName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? StackName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
