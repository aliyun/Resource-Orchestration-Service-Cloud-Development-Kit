using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::GrantCcnToCen`.</summary>
    [JsiiInterface(nativeType: typeof(IRosGrantCcnToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosGrantCcnToCenProps")]
    public interface IRosGrantCcnToCenProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ccnInstanceId: The ID of the CCN instance.
        /// </remarks>
        [JsiiProperty(name: "ccnInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string CcnInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenInstanceId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string CenInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenUid: The ID of the account to which the CEN instance belongs.
        /// </remarks>
        [JsiiProperty(name: "cenUid", typeJson: "{\"primitive\":\"string\"}")]
        string CenUid
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SAG::GrantCcnToCen`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosGrantCcnToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosGrantCcnToCenProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IRosGrantCcnToCenProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ccnInstanceId: The ID of the CCN instance.
            /// </remarks>
            [JsiiProperty(name: "ccnInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string CcnInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cenInstanceId: The ID of the CEN instance.
            /// </remarks>
            [JsiiProperty(name: "cenInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cenUid: The ID of the account to which the CEN instance belongs.
            /// </remarks>
            [JsiiProperty(name: "cenUid", typeJson: "{\"primitive\":\"string\"}")]
            public string CenUid
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
