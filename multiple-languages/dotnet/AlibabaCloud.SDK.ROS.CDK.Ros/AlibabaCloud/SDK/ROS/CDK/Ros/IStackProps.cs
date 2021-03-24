using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `ALIYUN::ROS::Stack`.</summary>
    [JsiiInterface(nativeType: typeof(IStackProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.StackProps")]
    public interface IStackProps
    {
        /// <summary>Property parameters: The set of parameters passed to this nested stack.</summary>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Parameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateBody: Structure containing the template body.</summary>
        /// <remarks>
        /// It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
        /// You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        /// </remarks>
        [JsiiProperty(name: "templateBody", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateBody
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateId: Template ID of template containing the template body.</summary>
        [JsiiProperty(name: "templateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? TemplateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateUrl: Location of file containing the template body.</summary>
        /// <remarks>
        /// The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
        /// You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        /// </remarks>
        [JsiiProperty(name: "templateUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? TemplateUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateVersion: Template version of template containing the template body.</summary>
        [JsiiProperty(name: "templateVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? TemplateVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update.</summary>
        /// <remarks>
        /// Default to 60 minutes.
        /// </remarks>
        [JsiiProperty(name: "timeoutMins", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? TimeoutMins
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ROS::Stack`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IStackProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.StackProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.IStackProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property parameters: The set of parameters passed to this nested stack.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Parameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateBody: Structure containing the template body.</summary>
            /// <remarks>
            /// It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
            /// You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateBody", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? TemplateBody
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateId: Template ID of template containing the template body.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "templateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? TemplateId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property templateUrl: Location of file containing the template body.</summary>
            /// <remarks>
            /// The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
            /// You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? TemplateUrl
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property templateVersion: Template version of template containing the template body.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "templateVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? TemplateVersion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update.</summary>
            /// <remarks>
            /// Default to 60 minutes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutMins", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? TimeoutMins
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
