package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::HoneyPot</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.609Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.HoneyPot")
public class HoneyPot extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.IHoneyPot {

    protected HoneyPot(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HoneyPot(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public HoneyPot(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneyPotProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public HoneyPot(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneyPotProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute HoneypotId: The ID of the honeypot.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotId() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HoneypotImageId: The ID of the honeypot image.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotImageId() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HoneypotImageName: The name of the honeypot image.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotImageName() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HoneypotName: The custom name of the honeypot.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotName() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NodeId: The ID of the management node.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeId() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute State: Honeypot status.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
        return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneyPotProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.HoneyPotProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.HoneyPot}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.HoneyPot> {
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
        private final com.aliyun.ros.cdk.threatdetection.HoneyPotProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.HoneyPotProps.Builder();
        }

        /**
         * Property honeypotImageId: The ID of the honeypot image.
         * <p>
         * <blockquote>
         * <p>
         * You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the IDs of images from the <strong>HoneypotImageId</strong> response parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param honeypotImageId Property honeypotImageId: The ID of the honeypot image. This parameter is required.
         */
        public Builder honeypotImageId(final java.lang.String honeypotImageId) {
            this.props.honeypotImageId(honeypotImageId);
            return this;
        }
        /**
         * Property honeypotImageId: The ID of the honeypot image.
         * <p>
         * <blockquote>
         * <p>
         * You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the IDs of images from the <strong>HoneypotImageId</strong> response parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param honeypotImageId Property honeypotImageId: The ID of the honeypot image. This parameter is required.
         */
        public Builder honeypotImageId(final com.aliyun.ros.cdk.core.IResolvable honeypotImageId) {
            this.props.honeypotImageId(honeypotImageId);
            return this;
        }

        /**
         * Property honeypotImageName: The name of the honeypot image.
         * <p>
         * <blockquote>
         * <p>
         * You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the names of images from the <strong>HoneypotImageName</strong> response parameter.
         * <p>
         * </blockquote>
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
         * <blockquote>
         * <p>
         * You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the names of images from the <strong>HoneypotImageName</strong> response parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param honeypotImageName Property honeypotImageName: The name of the honeypot image. This parameter is required.
         */
        public Builder honeypotImageName(final com.aliyun.ros.cdk.core.IResolvable honeypotImageName) {
            this.props.honeypotImageName(honeypotImageName);
            return this;
        }

        /**
         * Property honeypotName: The custom name of the honeypot.
         * <p>
         * @return {@code this}
         * @param honeypotName Property honeypotName: The custom name of the honeypot. This parameter is required.
         */
        public Builder honeypotName(final java.lang.String honeypotName) {
            this.props.honeypotName(honeypotName);
            return this;
        }
        /**
         * Property honeypotName: The custom name of the honeypot.
         * <p>
         * @return {@code this}
         * @param honeypotName Property honeypotName: The custom name of the honeypot. This parameter is required.
         */
        public Builder honeypotName(final com.aliyun.ros.cdk.core.IResolvable honeypotName) {
            this.props.honeypotName(honeypotName);
            return this;
        }

        /**
         * Property nodeId: The ID of the management node.
         * <p>
         * <blockquote>
         * <p>
         * You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
         * <p>
         * </blockquote>
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
         * <blockquote>
         * <p>
         * You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param nodeId Property nodeId: The ID of the management node. This parameter is required.
         */
        public Builder nodeId(final com.aliyun.ros.cdk.core.IResolvable nodeId) {
            this.props.nodeId(nodeId);
            return this;
        }

        /**
         * Property meta: Honeypot custom configuration.
         * <p>
         * JSON format. Contains the following fields:
         * <p>
         * <ul>
         * <li><strong>trojan_git</strong>:Git counterplan. Value:</li>
         * <li><strong>zip</strong>:Git source package</li>
         * <li><strong>web</strong>:.git directory leak</li>
         * <li><strong>close</strong>: close</li>
         * <li><strong>trojan_git_addr</strong>:Git anti-control connection address</li>
         * <li><strong>Trojan_git.zip</strong>:Git anti-Trojan package</li>
         * <li><strong>burp</strong>:Burp counter. Value:</li>
         * <li><strong>open</strong>: On</li>
         * <li><strong>close</strong>: close</li>
         * <li><strong>portrait_option</strong>: traceability configuration. Value:</li>
         * <li><strong>false</strong>: Disabled</li>
         * <li><strong>true</strong>: Enable.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param meta Property meta: Honeypot custom configuration. This parameter is required.
         */
        public Builder meta(final com.aliyun.ros.cdk.core.IResolvable meta) {
            this.props.meta(meta);
            return this;
        }
        /**
         * Property meta: Honeypot custom configuration.
         * <p>
         * JSON format. Contains the following fields:
         * <p>
         * <ul>
         * <li><strong>trojan_git</strong>:Git counterplan. Value:</li>
         * <li><strong>zip</strong>:Git source package</li>
         * <li><strong>web</strong>:.git directory leak</li>
         * <li><strong>close</strong>: close</li>
         * <li><strong>trojan_git_addr</strong>:Git anti-control connection address</li>
         * <li><strong>Trojan_git.zip</strong>:Git anti-Trojan package</li>
         * <li><strong>burp</strong>:Burp counter. Value:</li>
         * <li><strong>open</strong>: On</li>
         * <li><strong>close</strong>: close</li>
         * <li><strong>portrait_option</strong>: traceability configuration. Value:</li>
         * <li><strong>false</strong>: Disabled</li>
         * <li><strong>true</strong>: Enable.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param meta Property meta: Honeypot custom configuration. This parameter is required.
         */
        public Builder meta(final java.util.Map<java.lang.String, ? extends java.lang.Object> meta) {
            this.props.meta(meta);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.HoneyPot}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.HoneyPot build() {
            return new com.aliyun.ros.cdk.threatdetection.HoneyPot(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
