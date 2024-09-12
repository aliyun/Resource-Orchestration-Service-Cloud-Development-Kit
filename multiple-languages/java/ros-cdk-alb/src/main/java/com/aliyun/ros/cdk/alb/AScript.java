package com.aliyun.ros.cdk.alb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ALB::AScript</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:22.759Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.AScript")
public class AScript extends com.aliyun.ros.cdk.core.Resource {

    protected AScript(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AScript(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AScript(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.AScriptProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AScript(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.AScriptProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AScriptId: The AScript rule ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAScriptId() {
        return software.amazon.jsii.Kernel.get(this, "attrAScriptId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.AScriptProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.alb.AScriptProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.AScriptProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.AScript}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.AScript> {
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
        private final com.aliyun.ros.cdk.alb.AScriptProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.AScriptProps.Builder();
        }

        /**
         * Property aScriptName: The name of the AScript rule.
         * <p>
         * The name must be 2 to 128 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param aScriptName Property aScriptName: The name of the AScript rule. This parameter is required.
         */
        public Builder aScriptName(final java.lang.String aScriptName) {
            this.props.aScriptName(aScriptName);
            return this;
        }
        /**
         * Property aScriptName: The name of the AScript rule.
         * <p>
         * The name must be 2 to 128 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param aScriptName Property aScriptName: The name of the AScript rule. This parameter is required.
         */
        public Builder aScriptName(final com.aliyun.ros.cdk.core.IResolvable aScriptName) {
            this.props.aScriptName(aScriptName);
            return this;
        }

        /**
         * Property listenerId: The listener ID.
         * <p>
         * @return {@code this}
         * @param listenerId Property listenerId: The listener ID. This parameter is required.
         */
        public Builder listenerId(final java.lang.String listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }
        /**
         * Property listenerId: The listener ID.
         * <p>
         * @return {@code this}
         * @param listenerId Property listenerId: The listener ID. This parameter is required.
         */
        public Builder listenerId(final com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }

        /**
         * Property scriptContent: The content of the AScript rule.
         * <p>
         * @return {@code this}
         * @param scriptContent Property scriptContent: The content of the AScript rule. This parameter is required.
         */
        public Builder scriptContent(final java.lang.String scriptContent) {
            this.props.scriptContent(scriptContent);
            return this;
        }
        /**
         * Property scriptContent: The content of the AScript rule.
         * <p>
         * @return {@code this}
         * @param scriptContent Property scriptContent: The content of the AScript rule. This parameter is required.
         */
        public Builder scriptContent(final com.aliyun.ros.cdk.core.IResolvable scriptContent) {
            this.props.scriptContent(scriptContent);
            return this;
        }

        /**
         * Property enabled: Specifies whether to enable the AScript rule.
         * <p>
         * Valid values:
         * true
         * false (default)
         * <p>
         * @return {@code this}
         * @param enabled Property enabled: Specifies whether to enable the AScript rule. This parameter is required.
         */
        public Builder enabled(final java.lang.Boolean enabled) {
            this.props.enabled(enabled);
            return this;
        }
        /**
         * Property enabled: Specifies whether to enable the AScript rule.
         * <p>
         * Valid values:
         * true
         * false (default)
         * <p>
         * @return {@code this}
         * @param enabled Property enabled: Specifies whether to enable the AScript rule. This parameter is required.
         */
        public Builder enabled(final com.aliyun.ros.cdk.core.IResolvable enabled) {
            this.props.enabled(enabled);
            return this;
        }

        /**
         * Property extAttributeEnabled: Specifies whether to enable the extended attributes of the AScript rule.
         * <p>
         * Valid values:
         * true
         * false (default)
         * <p>
         * @return {@code this}
         * @param extAttributeEnabled Property extAttributeEnabled: Specifies whether to enable the extended attributes of the AScript rule. This parameter is required.
         */
        public Builder extAttributeEnabled(final java.lang.Boolean extAttributeEnabled) {
            this.props.extAttributeEnabled(extAttributeEnabled);
            return this;
        }
        /**
         * Property extAttributeEnabled: Specifies whether to enable the extended attributes of the AScript rule.
         * <p>
         * Valid values:
         * true
         * false (default)
         * <p>
         * @return {@code this}
         * @param extAttributeEnabled Property extAttributeEnabled: Specifies whether to enable the extended attributes of the AScript rule. This parameter is required.
         */
        public Builder extAttributeEnabled(final com.aliyun.ros.cdk.core.IResolvable extAttributeEnabled) {
            this.props.extAttributeEnabled(extAttributeEnabled);
            return this;
        }

        /**
         * Property extAttributes: The extended attributes.
         * <p>
         * @return {@code this}
         * @param extAttributes Property extAttributes: The extended attributes. This parameter is required.
         */
        public Builder extAttributes(final com.aliyun.ros.cdk.core.IResolvable extAttributes) {
            this.props.extAttributes(extAttributes);
            return this;
        }
        /**
         * Property extAttributes: The extended attributes.
         * <p>
         * @return {@code this}
         * @param extAttributes Property extAttributes: The extended attributes. This parameter is required.
         */
        public Builder extAttributes(final java.util.List<? extends java.lang.Object> extAttributes) {
            this.props.extAttributes(extAttributes);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.alb.AScript}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.AScript build() {
            return new com.aliyun.ros.cdk.alb.AScript(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
