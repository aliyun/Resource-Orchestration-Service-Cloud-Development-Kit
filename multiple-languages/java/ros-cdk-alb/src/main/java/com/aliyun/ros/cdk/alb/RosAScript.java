package com.aliyun.ros.cdk.alb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ALB::AScript</code>, which is used to create an AScript rule.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:03.945Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosAScript")
public class RosAScript extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAScript(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAScript(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.alb.RosAScript.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAScript(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.RosAScriptProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAScriptId() {
        return software.amazon.jsii.Kernel.get(this, "attrAScriptId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAScriptName() {
        return software.amazon.jsii.Kernel.get(this, "aScriptName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAScriptName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aScriptName", java.util.Objects.requireNonNull(value, "aScriptName is required"));
    }

    /**
     */
    public void setAScriptName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aScriptName", java.util.Objects.requireNonNull(value, "aScriptName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getListenerId() {
        return software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "listenerId", java.util.Objects.requireNonNull(value, "listenerId is required"));
    }

    /**
     */
    public void setListenerId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerId", java.util.Objects.requireNonNull(value, "listenerId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getScriptContent() {
        return software.amazon.jsii.Kernel.get(this, "scriptContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScriptContent(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scriptContent", java.util.Objects.requireNonNull(value, "scriptContent is required"));
    }

    /**
     */
    public void setScriptContent(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scriptContent", java.util.Objects.requireNonNull(value, "scriptContent is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnabled() {
        return software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enabled", value);
    }

    /**
     */
    public void setEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExtAttributeEnabled() {
        return software.amazon.jsii.Kernel.get(this, "extAttributeEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExtAttributeEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "extAttributeEnabled", value);
    }

    /**
     */
    public void setExtAttributeEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "extAttributeEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExtAttributes() {
        return software.amazon.jsii.Kernel.get(this, "extAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExtAttributes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "extAttributes", value);
    }

    /**
     */
    public void setExtAttributes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.alb.RosAScript.ExtAttributesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.alb.RosAScript.ExtAttributesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "extAttributes", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosAScript.ExtAttributesProperty")
    @software.amazon.jsii.Jsii.Proxy(ExtAttributesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ExtAttributesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAttributeKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAttributeValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ExtAttributesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ExtAttributesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ExtAttributesProperty> {
            java.lang.Object attributeKey;
            java.lang.Object attributeValue;

            /**
             * Sets the value of {@link ExtAttributesProperty#getAttributeKey}
             * @param attributeKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder attributeKey(java.lang.String attributeKey) {
                this.attributeKey = attributeKey;
                return this;
            }

            /**
             * Sets the value of {@link ExtAttributesProperty#getAttributeKey}
             * @param attributeKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder attributeKey(com.aliyun.ros.cdk.core.IResolvable attributeKey) {
                this.attributeKey = attributeKey;
                return this;
            }

            /**
             * Sets the value of {@link ExtAttributesProperty#getAttributeValue}
             * @param attributeValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder attributeValue(java.lang.String attributeValue) {
                this.attributeValue = attributeValue;
                return this;
            }

            /**
             * Sets the value of {@link ExtAttributesProperty#getAttributeValue}
             * @param attributeValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder attributeValue(com.aliyun.ros.cdk.core.IResolvable attributeValue) {
                this.attributeValue = attributeValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ExtAttributesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ExtAttributesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ExtAttributesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ExtAttributesProperty {
            private final java.lang.Object attributeKey;
            private final java.lang.Object attributeValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.attributeKey = software.amazon.jsii.Kernel.get(this, "attributeKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.attributeValue = software.amazon.jsii.Kernel.get(this, "attributeValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.attributeKey = builder.attributeKey;
                this.attributeValue = builder.attributeValue;
            }

            @Override
            public final java.lang.Object getAttributeKey() {
                return this.attributeKey;
            }

            @Override
            public final java.lang.Object getAttributeValue() {
                return this.attributeValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAttributeKey() != null) {
                    data.set("attributeKey", om.valueToTree(this.getAttributeKey()));
                }
                if (this.getAttributeValue() != null) {
                    data.set("attributeValue", om.valueToTree(this.getAttributeValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosAScript.ExtAttributesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ExtAttributesProperty.Jsii$Proxy that = (ExtAttributesProperty.Jsii$Proxy) o;

                if (this.attributeKey != null ? !this.attributeKey.equals(that.attributeKey) : that.attributeKey != null) return false;
                return this.attributeValue != null ? this.attributeValue.equals(that.attributeValue) : that.attributeValue == null;
            }

            @Override
            public final int hashCode() {
                int result = this.attributeKey != null ? this.attributeKey.hashCode() : 0;
                result = 31 * result + (this.attributeValue != null ? this.attributeValue.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.RosAScript}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.RosAScript> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.alb.RosAScriptProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.RosAScriptProps.Builder();
        }

        /**
         * @return {@code this}
         * @param aScriptName This parameter is required.
         */
        public Builder aScriptName(final java.lang.String aScriptName) {
            this.props.aScriptName(aScriptName);
            return this;
        }
        /**
         * @return {@code this}
         * @param aScriptName This parameter is required.
         */
        public Builder aScriptName(final com.aliyun.ros.cdk.core.IResolvable aScriptName) {
            this.props.aScriptName(aScriptName);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerId This parameter is required.
         */
        public Builder listenerId(final java.lang.String listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerId This parameter is required.
         */
        public Builder listenerId(final com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param scriptContent This parameter is required.
         */
        public Builder scriptContent(final java.lang.String scriptContent) {
            this.props.scriptContent(scriptContent);
            return this;
        }
        /**
         * @return {@code this}
         * @param scriptContent This parameter is required.
         */
        public Builder scriptContent(final com.aliyun.ros.cdk.core.IResolvable scriptContent) {
            this.props.scriptContent(scriptContent);
            return this;
        }

        /**
         * @return {@code this}
         * @param enabled This parameter is required.
         */
        public Builder enabled(final java.lang.Boolean enabled) {
            this.props.enabled(enabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param enabled This parameter is required.
         */
        public Builder enabled(final com.aliyun.ros.cdk.core.IResolvable enabled) {
            this.props.enabled(enabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param extAttributeEnabled This parameter is required.
         */
        public Builder extAttributeEnabled(final java.lang.Boolean extAttributeEnabled) {
            this.props.extAttributeEnabled(extAttributeEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param extAttributeEnabled This parameter is required.
         */
        public Builder extAttributeEnabled(final com.aliyun.ros.cdk.core.IResolvable extAttributeEnabled) {
            this.props.extAttributeEnabled(extAttributeEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param extAttributes This parameter is required.
         */
        public Builder extAttributes(final com.aliyun.ros.cdk.core.IResolvable extAttributes) {
            this.props.extAttributes(extAttributes);
            return this;
        }
        /**
         * @return {@code this}
         * @param extAttributes This parameter is required.
         */
        public Builder extAttributes(final java.util.List<? extends java.lang.Object> extAttributes) {
            this.props.extAttributes(extAttributes);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.alb.RosAScript}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.RosAScript build() {
            return new com.aliyun.ros.cdk.alb.RosAScript(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
