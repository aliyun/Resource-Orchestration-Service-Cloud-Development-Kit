package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::HoneypotPreset</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.637Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosHoneypotPreset")
public class RosHoneypotPreset extends com.aliyun.ros.cdk.core.RosResource {

    protected RosHoneypotPreset(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosHoneypotPreset(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosHoneypotPreset.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosHoneypotPreset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosHoneypotPresetProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHoneypotImageName() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotImageName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHoneypotPresetId() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotPresetId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMeta() {
        return software.amazon.jsii.Kernel.get(this, "attrMeta", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNodeId() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPresetName() {
        return software.amazon.jsii.Kernel.get(this, "attrPresetName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getHoneypotImageName() {
        return software.amazon.jsii.Kernel.get(this, "honeypotImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHoneypotImageName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "honeypotImageName", java.util.Objects.requireNonNull(value, "honeypotImageName is required"));
    }

    /**
     */
    public void setHoneypotImageName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "honeypotImageName", java.util.Objects.requireNonNull(value, "honeypotImageName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMeta() {
        return software.amazon.jsii.Kernel.get(this, "meta", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMeta(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "meta", java.util.Objects.requireNonNull(value, "meta is required"));
    }

    /**
     */
    public void setMeta(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosHoneypotPreset.MetaProperty value) {
        software.amazon.jsii.Kernel.set(this, "meta", java.util.Objects.requireNonNull(value, "meta is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNodeId() {
        return software.amazon.jsii.Kernel.get(this, "nodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodeId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nodeId", java.util.Objects.requireNonNull(value, "nodeId is required"));
    }

    /**
     */
    public void setNodeId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodeId", java.util.Objects.requireNonNull(value, "nodeId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPresetName() {
        return software.amazon.jsii.Kernel.get(this, "presetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPresetName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "presetName", java.util.Objects.requireNonNull(value, "presetName is required"));
    }

    /**
     */
    public void setPresetName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "presetName", java.util.Objects.requireNonNull(value, "presetName is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosHoneypotPreset.MetaProperty")
    @software.amazon.jsii.Jsii.Proxy(MetaProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MetaProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBurp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPortraitOption() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTrojanGit() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MetaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MetaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MetaProperty> {
            java.lang.Object burp;
            java.lang.Object portraitOption;
            java.lang.Object trojanGit;

            /**
             * Sets the value of {@link MetaProperty#getBurp}
             * @param burp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder burp(java.lang.String burp) {
                this.burp = burp;
                return this;
            }

            /**
             * Sets the value of {@link MetaProperty#getBurp}
             * @param burp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder burp(com.aliyun.ros.cdk.core.IResolvable burp) {
                this.burp = burp;
                return this;
            }

            /**
             * Sets the value of {@link MetaProperty#getPortraitOption}
             * @param portraitOption the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portraitOption(java.lang.Boolean portraitOption) {
                this.portraitOption = portraitOption;
                return this;
            }

            /**
             * Sets the value of {@link MetaProperty#getPortraitOption}
             * @param portraitOption the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portraitOption(com.aliyun.ros.cdk.core.IResolvable portraitOption) {
                this.portraitOption = portraitOption;
                return this;
            }

            /**
             * Sets the value of {@link MetaProperty#getTrojanGit}
             * @param trojanGit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trojanGit(java.lang.String trojanGit) {
                this.trojanGit = trojanGit;
                return this;
            }

            /**
             * Sets the value of {@link MetaProperty#getTrojanGit}
             * @param trojanGit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trojanGit(com.aliyun.ros.cdk.core.IResolvable trojanGit) {
                this.trojanGit = trojanGit;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MetaProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MetaProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MetaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MetaProperty {
            private final java.lang.Object burp;
            private final java.lang.Object portraitOption;
            private final java.lang.Object trojanGit;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.burp = software.amazon.jsii.Kernel.get(this, "burp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.portraitOption = software.amazon.jsii.Kernel.get(this, "portraitOption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.trojanGit = software.amazon.jsii.Kernel.get(this, "trojanGit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.burp = builder.burp;
                this.portraitOption = builder.portraitOption;
                this.trojanGit = builder.trojanGit;
            }

            @Override
            public final java.lang.Object getBurp() {
                return this.burp;
            }

            @Override
            public final java.lang.Object getPortraitOption() {
                return this.portraitOption;
            }

            @Override
            public final java.lang.Object getTrojanGit() {
                return this.trojanGit;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBurp() != null) {
                    data.set("burp", om.valueToTree(this.getBurp()));
                }
                if (this.getPortraitOption() != null) {
                    data.set("portraitOption", om.valueToTree(this.getPortraitOption()));
                }
                if (this.getTrojanGit() != null) {
                    data.set("trojanGit", om.valueToTree(this.getTrojanGit()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosHoneypotPreset.MetaProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MetaProperty.Jsii$Proxy that = (MetaProperty.Jsii$Proxy) o;

                if (this.burp != null ? !this.burp.equals(that.burp) : that.burp != null) return false;
                if (this.portraitOption != null ? !this.portraitOption.equals(that.portraitOption) : that.portraitOption != null) return false;
                return this.trojanGit != null ? this.trojanGit.equals(that.trojanGit) : that.trojanGit == null;
            }

            @Override
            public final int hashCode() {
                int result = this.burp != null ? this.burp.hashCode() : 0;
                result = 31 * result + (this.portraitOption != null ? this.portraitOption.hashCode() : 0);
                result = 31 * result + (this.trojanGit != null ? this.trojanGit.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosHoneypotPreset}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosHoneypotPreset> {
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
        private final com.aliyun.ros.cdk.threatdetection.RosHoneypotPresetProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosHoneypotPresetProps.Builder();
        }

        /**
         * @return {@code this}
         * @param honeypotImageName This parameter is required.
         */
        public Builder honeypotImageName(final java.lang.String honeypotImageName) {
            this.props.honeypotImageName(honeypotImageName);
            return this;
        }
        /**
         * @return {@code this}
         * @param honeypotImageName This parameter is required.
         */
        public Builder honeypotImageName(final com.aliyun.ros.cdk.core.IResolvable honeypotImageName) {
            this.props.honeypotImageName(honeypotImageName);
            return this;
        }

        /**
         * @return {@code this}
         * @param meta This parameter is required.
         */
        public Builder meta(final com.aliyun.ros.cdk.core.IResolvable meta) {
            this.props.meta(meta);
            return this;
        }
        /**
         * @return {@code this}
         * @param meta This parameter is required.
         */
        public Builder meta(final com.aliyun.ros.cdk.threatdetection.RosHoneypotPreset.MetaProperty meta) {
            this.props.meta(meta);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodeId This parameter is required.
         */
        public Builder nodeId(final java.lang.String nodeId) {
            this.props.nodeId(nodeId);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodeId This parameter is required.
         */
        public Builder nodeId(final com.aliyun.ros.cdk.core.IResolvable nodeId) {
            this.props.nodeId(nodeId);
            return this;
        }

        /**
         * @return {@code this}
         * @param presetName This parameter is required.
         */
        public Builder presetName(final java.lang.String presetName) {
            this.props.presetName(presetName);
            return this;
        }
        /**
         * @return {@code this}
         * @param presetName This parameter is required.
         */
        public Builder presetName(final com.aliyun.ros.cdk.core.IResolvable presetName) {
            this.props.presetName(presetName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosHoneypotPreset}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosHoneypotPreset build() {
            return new com.aliyun.ros.cdk.threatdetection.RosHoneypotPreset(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
