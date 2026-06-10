package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::HoneypotPreset</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.474Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.HoneypotPreset")
public class HoneypotPreset extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.IHoneypotPreset {

    protected HoneypotPreset(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HoneypotPreset(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public HoneypotPreset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotPresetProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public HoneypotPreset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotPresetProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute HoneypotImageName: The name of the honeypot image.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotImageName() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HoneypotPresetId: The ID of the honeypot template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotPresetId() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotPresetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Meta: The custom configurations of the honeypot template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMeta() {
        return software.amazon.jsii.Kernel.get(this, "attrMeta", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NodeId: The ID of the management node.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeId() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PresetName: The custom name of the honeypot template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPresetName() {
        return software.amazon.jsii.Kernel.get(this, "attrPresetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotPresetProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.HoneypotPresetProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.HoneypotPreset}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.HoneypotPreset> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.threatdetection.HoneypotPresetProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.HoneypotPresetProps.Builder();
        }

        /**
         * Property honeypotImageName: The name of the honeypot image.
         * <p>
         * @return {@code this}
         * @param honeypotImageName Property honeypotImageName: The name of the honeypot image. This parameter is required.
         */
        public Builder honeypotImageName(final java.lang.String honeypotImageName) {
            this.props.honeypotImageName(honeypotImageName);
            return this;
        }
        /**
         * Property honeypotImageName: The name of the honeypot image.
         * <p>
         * @return {@code this}
         * @param honeypotImageName Property honeypotImageName: The name of the honeypot image. This parameter is required.
         */
        public Builder honeypotImageName(final com.aliyun.ros.cdk.core.IResolvable honeypotImageName) {
            this.props.honeypotImageName(honeypotImageName);
            return this;
        }

        /**
         * Property meta: The custom configurations of the honeypot template.
         * <p>
         * The value is a JSON string that contains the following fields:
         * <p>
         * <ul>
         * <li><strong>PortraitOption</strong>: Social Source Tracing</li>
         * <li><strong>Burp</strong>: Burp-specific Defense</li>
         * <li><strong>TrojanGit</strong>: Git-specific Defense.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param meta Property meta: The custom configurations of the honeypot template. This parameter is required.
         */
        public Builder meta(final com.aliyun.ros.cdk.core.IResolvable meta) {
            this.props.meta(meta);
            return this;
        }
        /**
         * Property meta: The custom configurations of the honeypot template.
         * <p>
         * The value is a JSON string that contains the following fields:
         * <p>
         * <ul>
         * <li><strong>PortraitOption</strong>: Social Source Tracing</li>
         * <li><strong>Burp</strong>: Burp-specific Defense</li>
         * <li><strong>TrojanGit</strong>: Git-specific Defense.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param meta Property meta: The custom configurations of the honeypot template. This parameter is required.
         */
        public Builder meta(final com.aliyun.ros.cdk.threatdetection.RosHoneypotPreset.MetaProperty meta) {
            this.props.meta(meta);
            return this;
        }

        /**
         * Property nodeId: The ID of the management node.
         * <p>
         * @return {@code this}
         * @param nodeId Property nodeId: The ID of the management node. This parameter is required.
         */
        public Builder nodeId(final java.lang.String nodeId) {
            this.props.nodeId(nodeId);
            return this;
        }
        /**
         * Property nodeId: The ID of the management node.
         * <p>
         * @return {@code this}
         * @param nodeId Property nodeId: The ID of the management node. This parameter is required.
         */
        public Builder nodeId(final com.aliyun.ros.cdk.core.IResolvable nodeId) {
            this.props.nodeId(nodeId);
            return this;
        }

        /**
         * Property presetName: The custom name of the honeypot template.
         * <p>
         * @return {@code this}
         * @param presetName Property presetName: The custom name of the honeypot template. This parameter is required.
         */
        public Builder presetName(final java.lang.String presetName) {
            this.props.presetName(presetName);
            return this;
        }
        /**
         * Property presetName: The custom name of the honeypot template.
         * <p>
         * @return {@code this}
         * @param presetName Property presetName: The custom name of the honeypot template. This parameter is required.
         */
        public Builder presetName(final com.aliyun.ros.cdk.core.IResolvable presetName) {
            this.props.presetName(presetName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.HoneypotPreset}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.HoneypotPreset build() {
            return new com.aliyun.ros.cdk.threatdetection.HoneypotPreset(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
