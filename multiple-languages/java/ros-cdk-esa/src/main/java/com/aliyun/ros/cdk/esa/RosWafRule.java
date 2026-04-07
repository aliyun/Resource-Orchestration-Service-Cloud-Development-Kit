package com.aliyun.ros.cdk.esa;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESA::WafRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.276Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule")
public class RosWafRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosWafRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosWafRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.esa.RosWafRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosWafRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RosWafRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPhase() {
        return software.amazon.jsii.Kernel.get(this, "attrPhase", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRulesetId() {
        return software.amazon.jsii.Kernel.get(this, "attrRulesetId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWafRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrWafRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPhase() {
        return software.amazon.jsii.Kernel.get(this, "phase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPhase(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "phase", java.util.Objects.requireNonNull(value, "phase is required"));
    }

    /**
     */
    public void setPhase(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "phase", java.util.Objects.requireNonNull(value, "phase is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSiteId() {
        return software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
        return software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "config", value);
    }

    /**
     */
    public void setConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.esa.RosWafRule.ConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "config", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRulesetId() {
        return software.amazon.jsii.Kernel.get(this, "rulesetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRulesetId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "rulesetId", value);
    }

    /**
     */
    public void setRulesetId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rulesetId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getShared() {
        return software.amazon.jsii.Kernel.get(this, "shared", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setShared(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "shared", value);
    }

    /**
     */
    public void setShared(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.esa.RosWafRule.SharedProperty value) {
        software.amazon.jsii.Kernel.set(this, "shared", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSiteVersion() {
        return software.amazon.jsii.Kernel.get(this, "siteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSiteVersion(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "siteVersion", value);
    }

    /**
     */
    public void setSiteVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "siteVersion", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.ActionsProperty")
    @software.amazon.jsii.Jsii.Proxy(ActionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ActionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBypass() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResponse() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ActionsProperty> {
            java.lang.Object bypass;
            java.lang.Object response;

            /**
             * Sets the value of {@link ActionsProperty#getBypass}
             * @param bypass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bypass(com.aliyun.ros.cdk.core.IResolvable bypass) {
                this.bypass = bypass;
                return this;
            }

            /**
             * Sets the value of {@link ActionsProperty#getBypass}
             * @param bypass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bypass(com.aliyun.ros.cdk.esa.RosWafRule.BypassProperty bypass) {
                this.bypass = bypass;
                return this;
            }

            /**
             * Sets the value of {@link ActionsProperty#getResponse}
             * @param response the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder response(com.aliyun.ros.cdk.core.IResolvable response) {
                this.response = response;
                return this;
            }

            /**
             * Sets the value of {@link ActionsProperty#getResponse}
             * @param response the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder response(com.aliyun.ros.cdk.esa.RosWafRule.ResponseProperty response) {
                this.response = response;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ActionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ActionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ActionsProperty {
            private final java.lang.Object bypass;
            private final java.lang.Object response;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.bypass = software.amazon.jsii.Kernel.get(this, "bypass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.response = software.amazon.jsii.Kernel.get(this, "response", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.bypass = builder.bypass;
                this.response = builder.response;
            }

            @Override
            public final java.lang.Object getBypass() {
                return this.bypass;
            }

            @Override
            public final java.lang.Object getResponse() {
                return this.response;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBypass() != null) {
                    data.set("bypass", om.valueToTree(this.getBypass()));
                }
                if (this.getResponse() != null) {
                    data.set("response", om.valueToTree(this.getResponse()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.ActionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ActionsProperty.Jsii$Proxy that = (ActionsProperty.Jsii$Proxy) o;

                if (this.bypass != null ? !this.bypass.equals(that.bypass) : that.bypass != null) return false;
                return this.response != null ? this.response.equals(that.response) : that.response == null;
            }

            @Override
            public final int hashCode() {
                int result = this.bypass != null ? this.bypass.hashCode() : 0;
                result = 31 * result + (this.response != null ? this.response.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.ActionsResponseProperty")
    @software.amazon.jsii.Jsii.Proxy(ActionsResponseProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ActionsResponseProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIdentity() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ActionsResponseProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ActionsResponseProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ActionsResponseProperty> {
            java.lang.Object code;
            java.lang.Object identity;

            /**
             * Sets the value of {@link ActionsResponseProperty#getCode}
             * @param code the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder code(java.lang.Number code) {
                this.code = code;
                return this;
            }

            /**
             * Sets the value of {@link ActionsResponseProperty#getCode}
             * @param code the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder code(com.aliyun.ros.cdk.core.IResolvable code) {
                this.code = code;
                return this;
            }

            /**
             * Sets the value of {@link ActionsResponseProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(java.lang.Number identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Sets the value of {@link ActionsResponseProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(com.aliyun.ros.cdk.core.IResolvable identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ActionsResponseProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ActionsResponseProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ActionsResponseProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ActionsResponseProperty {
            private final java.lang.Object code;
            private final java.lang.Object identity;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.code = software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.identity = software.amazon.jsii.Kernel.get(this, "identity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.code = builder.code;
                this.identity = builder.identity;
            }

            @Override
            public final java.lang.Object getCode() {
                return this.code;
            }

            @Override
            public final java.lang.Object getIdentity() {
                return this.identity;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCode() != null) {
                    data.set("code", om.valueToTree(this.getCode()));
                }
                if (this.getIdentity() != null) {
                    data.set("identity", om.valueToTree(this.getIdentity()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.ActionsResponseProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ActionsResponseProperty.Jsii$Proxy that = (ActionsResponseProperty.Jsii$Proxy) o;

                if (this.code != null ? !this.code.equals(that.code) : that.code != null) return false;
                return this.identity != null ? this.identity.equals(that.identity) : that.identity == null;
            }

            @Override
            public final int hashCode() {
                int result = this.code != null ? this.code.hashCode() : 0;
                result = 31 * result + (this.identity != null ? this.identity.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.AppPackageProperty")
    @software.amazon.jsii.Jsii.Proxy(AppPackageProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AppPackageProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPackageSigns() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AppPackageProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AppPackageProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AppPackageProperty> {
            java.lang.Object packageSigns;

            /**
             * Sets the value of {@link AppPackageProperty#getPackageSigns}
             * @param packageSigns the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder packageSigns(com.aliyun.ros.cdk.core.IResolvable packageSigns) {
                this.packageSigns = packageSigns;
                return this;
            }

            /**
             * Sets the value of {@link AppPackageProperty#getPackageSigns}
             * @param packageSigns the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder packageSigns(java.util.List<? extends java.lang.Object> packageSigns) {
                this.packageSigns = packageSigns;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AppPackageProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AppPackageProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AppPackageProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AppPackageProperty {
            private final java.lang.Object packageSigns;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.packageSigns = software.amazon.jsii.Kernel.get(this, "packageSigns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.packageSigns = builder.packageSigns;
            }

            @Override
            public final java.lang.Object getPackageSigns() {
                return this.packageSigns;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getPackageSigns() != null) {
                    data.set("packageSigns", om.valueToTree(this.getPackageSigns()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.AppPackageProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AppPackageProperty.Jsii$Proxy that = (AppPackageProperty.Jsii$Proxy) o;

                return this.packageSigns != null ? this.packageSigns.equals(that.packageSigns) : that.packageSigns == null;
            }

            @Override
            public final int hashCode() {
                int result = this.packageSigns != null ? this.packageSigns.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.AppSdkProperty")
    @software.amazon.jsii.Jsii.Proxy(AppSdkProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AppSdkProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCustomSign() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCustomSignStatus() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFeatureAbnormal() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AppSdkProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AppSdkProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AppSdkProperty> {
            java.lang.Object customSign;
            java.lang.Object customSignStatus;
            java.lang.Object featureAbnormal;

            /**
             * Sets the value of {@link AppSdkProperty#getCustomSign}
             * @param customSign the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customSign(com.aliyun.ros.cdk.core.IResolvable customSign) {
                this.customSign = customSign;
                return this;
            }

            /**
             * Sets the value of {@link AppSdkProperty#getCustomSign}
             * @param customSign the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customSign(com.aliyun.ros.cdk.esa.RosWafRule.CustomSignProperty customSign) {
                this.customSign = customSign;
                return this;
            }

            /**
             * Sets the value of {@link AppSdkProperty#getCustomSignStatus}
             * @param customSignStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customSignStatus(java.lang.String customSignStatus) {
                this.customSignStatus = customSignStatus;
                return this;
            }

            /**
             * Sets the value of {@link AppSdkProperty#getCustomSignStatus}
             * @param customSignStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customSignStatus(com.aliyun.ros.cdk.core.IResolvable customSignStatus) {
                this.customSignStatus = customSignStatus;
                return this;
            }

            /**
             * Sets the value of {@link AppSdkProperty#getFeatureAbnormal}
             * @param featureAbnormal the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder featureAbnormal(com.aliyun.ros.cdk.core.IResolvable featureAbnormal) {
                this.featureAbnormal = featureAbnormal;
                return this;
            }

            /**
             * Sets the value of {@link AppSdkProperty#getFeatureAbnormal}
             * @param featureAbnormal the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder featureAbnormal(java.util.List<? extends java.lang.Object> featureAbnormal) {
                this.featureAbnormal = featureAbnormal;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AppSdkProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AppSdkProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AppSdkProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AppSdkProperty {
            private final java.lang.Object customSign;
            private final java.lang.Object customSignStatus;
            private final java.lang.Object featureAbnormal;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.customSign = software.amazon.jsii.Kernel.get(this, "customSign", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.customSignStatus = software.amazon.jsii.Kernel.get(this, "customSignStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.featureAbnormal = software.amazon.jsii.Kernel.get(this, "featureAbnormal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.customSign = builder.customSign;
                this.customSignStatus = builder.customSignStatus;
                this.featureAbnormal = builder.featureAbnormal;
            }

            @Override
            public final java.lang.Object getCustomSign() {
                return this.customSign;
            }

            @Override
            public final java.lang.Object getCustomSignStatus() {
                return this.customSignStatus;
            }

            @Override
            public final java.lang.Object getFeatureAbnormal() {
                return this.featureAbnormal;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCustomSign() != null) {
                    data.set("customSign", om.valueToTree(this.getCustomSign()));
                }
                if (this.getCustomSignStatus() != null) {
                    data.set("customSignStatus", om.valueToTree(this.getCustomSignStatus()));
                }
                if (this.getFeatureAbnormal() != null) {
                    data.set("featureAbnormal", om.valueToTree(this.getFeatureAbnormal()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.AppSdkProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AppSdkProperty.Jsii$Proxy that = (AppSdkProperty.Jsii$Proxy) o;

                if (this.customSign != null ? !this.customSign.equals(that.customSign) : that.customSign != null) return false;
                if (this.customSignStatus != null ? !this.customSignStatus.equals(that.customSignStatus) : that.customSignStatus != null) return false;
                return this.featureAbnormal != null ? this.featureAbnormal.equals(that.featureAbnormal) : that.featureAbnormal == null;
            }

            @Override
            public final int hashCode() {
                int result = this.customSign != null ? this.customSign.hashCode() : 0;
                result = 31 * result + (this.customSignStatus != null ? this.customSignStatus.hashCode() : 0);
                result = 31 * result + (this.featureAbnormal != null ? this.featureAbnormal.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.BypassProperty")
    @software.amazon.jsii.Jsii.Proxy(BypassProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface BypassProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCustomRules() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegularRules() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegularTypes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSkip() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getTags() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link BypassProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link BypassProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<BypassProperty> {
            java.lang.Object customRules;
            java.lang.Object regularRules;
            java.lang.Object regularTypes;
            java.lang.Object skip;
            java.util.List<java.lang.String> tags;

            /**
             * Sets the value of {@link BypassProperty#getCustomRules}
             * @param customRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customRules(com.aliyun.ros.cdk.core.IResolvable customRules) {
                this.customRules = customRules;
                return this;
            }

            /**
             * Sets the value of {@link BypassProperty#getCustomRules}
             * @param customRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customRules(java.util.List<? extends java.lang.Object> customRules) {
                this.customRules = customRules;
                return this;
            }

            /**
             * Sets the value of {@link BypassProperty#getRegularRules}
             * @param regularRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regularRules(com.aliyun.ros.cdk.core.IResolvable regularRules) {
                this.regularRules = regularRules;
                return this;
            }

            /**
             * Sets the value of {@link BypassProperty#getRegularRules}
             * @param regularRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regularRules(java.util.List<? extends java.lang.Object> regularRules) {
                this.regularRules = regularRules;
                return this;
            }

            /**
             * Sets the value of {@link BypassProperty#getRegularTypes}
             * @param regularTypes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regularTypes(com.aliyun.ros.cdk.core.IResolvable regularTypes) {
                this.regularTypes = regularTypes;
                return this;
            }

            /**
             * Sets the value of {@link BypassProperty#getRegularTypes}
             * @param regularTypes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regularTypes(java.util.List<? extends java.lang.Object> regularTypes) {
                this.regularTypes = regularTypes;
                return this;
            }

            /**
             * Sets the value of {@link BypassProperty#getSkip}
             * @param skip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder skip(java.lang.String skip) {
                this.skip = skip;
                return this;
            }

            /**
             * Sets the value of {@link BypassProperty#getSkip}
             * @param skip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder skip(com.aliyun.ros.cdk.core.IResolvable skip) {
                this.skip = skip;
                return this;
            }

            /**
             * Sets the value of {@link BypassProperty#getTags}
             * @param tags the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tags(java.util.List<java.lang.String> tags) {
                this.tags = tags;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link BypassProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public BypassProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link BypassProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BypassProperty {
            private final java.lang.Object customRules;
            private final java.lang.Object regularRules;
            private final java.lang.Object regularTypes;
            private final java.lang.Object skip;
            private final java.util.List<java.lang.String> tags;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.customRules = software.amazon.jsii.Kernel.get(this, "customRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regularRules = software.amazon.jsii.Kernel.get(this, "regularRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regularTypes = software.amazon.jsii.Kernel.get(this, "regularTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.skip = software.amazon.jsii.Kernel.get(this, "skip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.customRules = builder.customRules;
                this.regularRules = builder.regularRules;
                this.regularTypes = builder.regularTypes;
                this.skip = builder.skip;
                this.tags = builder.tags;
            }

            @Override
            public final java.lang.Object getCustomRules() {
                return this.customRules;
            }

            @Override
            public final java.lang.Object getRegularRules() {
                return this.regularRules;
            }

            @Override
            public final java.lang.Object getRegularTypes() {
                return this.regularTypes;
            }

            @Override
            public final java.lang.Object getSkip() {
                return this.skip;
            }

            @Override
            public final java.util.List<java.lang.String> getTags() {
                return this.tags;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCustomRules() != null) {
                    data.set("customRules", om.valueToTree(this.getCustomRules()));
                }
                if (this.getRegularRules() != null) {
                    data.set("regularRules", om.valueToTree(this.getRegularRules()));
                }
                if (this.getRegularTypes() != null) {
                    data.set("regularTypes", om.valueToTree(this.getRegularTypes()));
                }
                if (this.getSkip() != null) {
                    data.set("skip", om.valueToTree(this.getSkip()));
                }
                if (this.getTags() != null) {
                    data.set("tags", om.valueToTree(this.getTags()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.BypassProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                BypassProperty.Jsii$Proxy that = (BypassProperty.Jsii$Proxy) o;

                if (this.customRules != null ? !this.customRules.equals(that.customRules) : that.customRules != null) return false;
                if (this.regularRules != null ? !this.regularRules.equals(that.regularRules) : that.regularRules != null) return false;
                if (this.regularTypes != null ? !this.regularTypes.equals(that.regularTypes) : that.regularTypes != null) return false;
                if (this.skip != null ? !this.skip.equals(that.skip) : that.skip != null) return false;
                return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
            }

            @Override
            public final int hashCode() {
                int result = this.customRules != null ? this.customRules.hashCode() : 0;
                result = 31 * result + (this.regularRules != null ? this.regularRules.hashCode() : 0);
                result = 31 * result + (this.regularTypes != null ? this.regularTypes.hashCode() : 0);
                result = 31 * result + (this.skip != null ? this.skip.hashCode() : 0);
                result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.CharacteristicsCriteriaCriteriaCriteriaProperty")
    @software.amazon.jsii.Jsii.Proxy(CharacteristicsCriteriaCriteriaCriteriaProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CharacteristicsCriteriaCriteriaCriteriaProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CharacteristicsCriteriaCriteriaCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CharacteristicsCriteriaCriteriaCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CharacteristicsCriteriaCriteriaCriteriaProperty> {
            java.lang.Object matchType;

            /**
             * Sets the value of {@link CharacteristicsCriteriaCriteriaCriteriaProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsCriteriaCriteriaCriteriaProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CharacteristicsCriteriaCriteriaCriteriaProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CharacteristicsCriteriaCriteriaCriteriaProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CharacteristicsCriteriaCriteriaCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CharacteristicsCriteriaCriteriaCriteriaProperty {
            private final java.lang.Object matchType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.matchType = builder.matchType;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.CharacteristicsCriteriaCriteriaCriteriaProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CharacteristicsCriteriaCriteriaCriteriaProperty.Jsii$Proxy that = (CharacteristicsCriteriaCriteriaCriteriaProperty.Jsii$Proxy) o;

                return this.matchType != null ? this.matchType.equals(that.matchType) : that.matchType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.matchType != null ? this.matchType.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.CharacteristicsCriteriaCriteriaProperty")
    @software.amazon.jsii.Jsii.Proxy(CharacteristicsCriteriaCriteriaProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CharacteristicsCriteriaCriteriaProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCriteria() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogic() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CharacteristicsCriteriaCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CharacteristicsCriteriaCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CharacteristicsCriteriaCriteriaProperty> {
            java.lang.Object criteria;
            java.lang.Object logic;
            java.lang.Object matchType;

            /**
             * Sets the value of {@link CharacteristicsCriteriaCriteriaProperty#getCriteria}
             * @param criteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder criteria(com.aliyun.ros.cdk.core.IResolvable criteria) {
                this.criteria = criteria;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsCriteriaCriteriaProperty#getCriteria}
             * @param criteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder criteria(java.util.List<? extends java.lang.Object> criteria) {
                this.criteria = criteria;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsCriteriaCriteriaProperty#getLogic}
             * @param logic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logic(java.lang.String logic) {
                this.logic = logic;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsCriteriaCriteriaProperty#getLogic}
             * @param logic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logic(com.aliyun.ros.cdk.core.IResolvable logic) {
                this.logic = logic;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsCriteriaCriteriaProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsCriteriaCriteriaProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CharacteristicsCriteriaCriteriaProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CharacteristicsCriteriaCriteriaProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CharacteristicsCriteriaCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CharacteristicsCriteriaCriteriaProperty {
            private final java.lang.Object criteria;
            private final java.lang.Object logic;
            private final java.lang.Object matchType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.criteria = software.amazon.jsii.Kernel.get(this, "criteria", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logic = software.amazon.jsii.Kernel.get(this, "logic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.criteria = builder.criteria;
                this.logic = builder.logic;
                this.matchType = builder.matchType;
            }

            @Override
            public final java.lang.Object getCriteria() {
                return this.criteria;
            }

            @Override
            public final java.lang.Object getLogic() {
                return this.logic;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCriteria() != null) {
                    data.set("criteria", om.valueToTree(this.getCriteria()));
                }
                if (this.getLogic() != null) {
                    data.set("logic", om.valueToTree(this.getLogic()));
                }
                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.CharacteristicsCriteriaCriteriaProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CharacteristicsCriteriaCriteriaProperty.Jsii$Proxy that = (CharacteristicsCriteriaCriteriaProperty.Jsii$Proxy) o;

                if (this.criteria != null ? !this.criteria.equals(that.criteria) : that.criteria != null) return false;
                if (this.logic != null ? !this.logic.equals(that.logic) : that.logic != null) return false;
                return this.matchType != null ? this.matchType.equals(that.matchType) : that.matchType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.criteria != null ? this.criteria.hashCode() : 0;
                result = 31 * result + (this.logic != null ? this.logic.hashCode() : 0);
                result = 31 * result + (this.matchType != null ? this.matchType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.CharacteristicsCriteriaProperty")
    @software.amazon.jsii.Jsii.Proxy(CharacteristicsCriteriaProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CharacteristicsCriteriaProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCriteria() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogic() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CharacteristicsCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CharacteristicsCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CharacteristicsCriteriaProperty> {
            java.lang.Object criteria;
            java.lang.Object logic;
            java.lang.Object matchType;

            /**
             * Sets the value of {@link CharacteristicsCriteriaProperty#getCriteria}
             * @param criteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder criteria(com.aliyun.ros.cdk.core.IResolvable criteria) {
                this.criteria = criteria;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsCriteriaProperty#getCriteria}
             * @param criteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder criteria(java.util.List<? extends java.lang.Object> criteria) {
                this.criteria = criteria;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsCriteriaProperty#getLogic}
             * @param logic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logic(java.lang.String logic) {
                this.logic = logic;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsCriteriaProperty#getLogic}
             * @param logic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logic(com.aliyun.ros.cdk.core.IResolvable logic) {
                this.logic = logic;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsCriteriaProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsCriteriaProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CharacteristicsCriteriaProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CharacteristicsCriteriaProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CharacteristicsCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CharacteristicsCriteriaProperty {
            private final java.lang.Object criteria;
            private final java.lang.Object logic;
            private final java.lang.Object matchType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.criteria = software.amazon.jsii.Kernel.get(this, "criteria", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logic = software.amazon.jsii.Kernel.get(this, "logic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.criteria = builder.criteria;
                this.logic = builder.logic;
                this.matchType = builder.matchType;
            }

            @Override
            public final java.lang.Object getCriteria() {
                return this.criteria;
            }

            @Override
            public final java.lang.Object getLogic() {
                return this.logic;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCriteria() != null) {
                    data.set("criteria", om.valueToTree(this.getCriteria()));
                }
                if (this.getLogic() != null) {
                    data.set("logic", om.valueToTree(this.getLogic()));
                }
                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.CharacteristicsCriteriaProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CharacteristicsCriteriaProperty.Jsii$Proxy that = (CharacteristicsCriteriaProperty.Jsii$Proxy) o;

                if (this.criteria != null ? !this.criteria.equals(that.criteria) : that.criteria != null) return false;
                if (this.logic != null ? !this.logic.equals(that.logic) : that.logic != null) return false;
                return this.matchType != null ? this.matchType.equals(that.matchType) : that.matchType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.criteria != null ? this.criteria.hashCode() : 0;
                result = 31 * result + (this.logic != null ? this.logic.hashCode() : 0);
                result = 31 * result + (this.matchType != null ? this.matchType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.CharacteristicsProperty")
    @software.amazon.jsii.Jsii.Proxy(CharacteristicsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CharacteristicsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCriteria() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogic() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CharacteristicsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CharacteristicsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CharacteristicsProperty> {
            java.lang.Object criteria;
            java.lang.Object logic;

            /**
             * Sets the value of {@link CharacteristicsProperty#getCriteria}
             * @param criteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder criteria(com.aliyun.ros.cdk.core.IResolvable criteria) {
                this.criteria = criteria;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsProperty#getCriteria}
             * @param criteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder criteria(java.util.List<? extends java.lang.Object> criteria) {
                this.criteria = criteria;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsProperty#getLogic}
             * @param logic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logic(java.lang.String logic) {
                this.logic = logic;
                return this;
            }

            /**
             * Sets the value of {@link CharacteristicsProperty#getLogic}
             * @param logic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logic(com.aliyun.ros.cdk.core.IResolvable logic) {
                this.logic = logic;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CharacteristicsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CharacteristicsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CharacteristicsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CharacteristicsProperty {
            private final java.lang.Object criteria;
            private final java.lang.Object logic;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.criteria = software.amazon.jsii.Kernel.get(this, "criteria", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logic = software.amazon.jsii.Kernel.get(this, "logic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.criteria = builder.criteria;
                this.logic = builder.logic;
            }

            @Override
            public final java.lang.Object getCriteria() {
                return this.criteria;
            }

            @Override
            public final java.lang.Object getLogic() {
                return this.logic;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCriteria() != null) {
                    data.set("criteria", om.valueToTree(this.getCriteria()));
                }
                if (this.getLogic() != null) {
                    data.set("logic", om.valueToTree(this.getLogic()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.CharacteristicsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CharacteristicsProperty.Jsii$Proxy that = (CharacteristicsProperty.Jsii$Proxy) o;

                if (this.criteria != null ? !this.criteria.equals(that.criteria) : that.criteria != null) return false;
                return this.logic != null ? this.logic.equals(that.logic) : that.logic == null;
            }

            @Override
            public final int hashCode() {
                int result = this.criteria != null ? this.criteria.hashCode() : 0;
                result = 31 * result + (this.logic != null ? this.logic.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.ConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAction() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getActions() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAppPackage() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAppSdk() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExpression() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIdentity() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getManagedGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getManagedList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getManagedRulesets() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNotes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRateLimit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSigchl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimer() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConfigProperty> {
            java.lang.Object action;
            java.lang.Object actions;
            java.lang.Object appPackage;
            java.lang.Object appSdk;
            java.lang.Object expression;
            java.lang.Object identity;
            java.lang.Object managedGroupId;
            java.lang.Object managedList;
            java.lang.Object managedRulesets;
            java.lang.Object name;
            java.lang.Object notes;
            java.lang.Object rateLimit;
            java.lang.Object securityLevel;
            java.lang.Object sigchl;
            java.lang.Object status;
            java.lang.Object timer;
            java.lang.Object type;
            java.lang.Object value;

            /**
             * Sets the value of {@link ConfigProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(java.lang.String action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(com.aliyun.ros.cdk.core.IResolvable action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getActions}
             * @param actions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actions(com.aliyun.ros.cdk.core.IResolvable actions) {
                this.actions = actions;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getActions}
             * @param actions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actions(com.aliyun.ros.cdk.esa.RosWafRule.ActionsProperty actions) {
                this.actions = actions;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getAppPackage}
             * @param appPackage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appPackage(com.aliyun.ros.cdk.core.IResolvable appPackage) {
                this.appPackage = appPackage;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getAppPackage}
             * @param appPackage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appPackage(com.aliyun.ros.cdk.esa.RosWafRule.AppPackageProperty appPackage) {
                this.appPackage = appPackage;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getAppSdk}
             * @param appSdk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appSdk(com.aliyun.ros.cdk.core.IResolvable appSdk) {
                this.appSdk = appSdk;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getAppSdk}
             * @param appSdk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appSdk(com.aliyun.ros.cdk.esa.RosWafRule.AppSdkProperty appSdk) {
                this.appSdk = appSdk;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getExpression}
             * @param expression the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expression(java.lang.String expression) {
                this.expression = expression;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getExpression}
             * @param expression the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expression(com.aliyun.ros.cdk.core.IResolvable expression) {
                this.expression = expression;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(java.lang.Number identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(com.aliyun.ros.cdk.core.IResolvable identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getManagedGroupId}
             * @param managedGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedGroupId(java.lang.Number managedGroupId) {
                this.managedGroupId = managedGroupId;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getManagedGroupId}
             * @param managedGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedGroupId(com.aliyun.ros.cdk.core.IResolvable managedGroupId) {
                this.managedGroupId = managedGroupId;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getManagedList}
             * @param managedList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedList(java.lang.String managedList) {
                this.managedList = managedList;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getManagedList}
             * @param managedList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedList(com.aliyun.ros.cdk.core.IResolvable managedList) {
                this.managedList = managedList;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getManagedRulesets}
             * @param managedRulesets the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedRulesets(com.aliyun.ros.cdk.core.IResolvable managedRulesets) {
                this.managedRulesets = managedRulesets;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getManagedRulesets}
             * @param managedRulesets the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedRulesets(java.util.List<? extends java.lang.Object> managedRulesets) {
                this.managedRulesets = managedRulesets;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getNotes}
             * @param notes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notes(java.lang.String notes) {
                this.notes = notes;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getNotes}
             * @param notes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notes(com.aliyun.ros.cdk.core.IResolvable notes) {
                this.notes = notes;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getRateLimit}
             * @param rateLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rateLimit(com.aliyun.ros.cdk.core.IResolvable rateLimit) {
                this.rateLimit = rateLimit;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getRateLimit}
             * @param rateLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rateLimit(com.aliyun.ros.cdk.esa.RosWafRule.RateLimitProperty rateLimit) {
                this.rateLimit = rateLimit;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getSecurityLevel}
             * @param securityLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityLevel(com.aliyun.ros.cdk.core.IResolvable securityLevel) {
                this.securityLevel = securityLevel;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getSecurityLevel}
             * @param securityLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityLevel(com.aliyun.ros.cdk.esa.RosWafRule.SecurityLevelProperty securityLevel) {
                this.securityLevel = securityLevel;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getSigchl}
             * @param sigchl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sigchl(com.aliyun.ros.cdk.core.IResolvable sigchl) {
                this.sigchl = sigchl;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getSigchl}
             * @param sigchl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sigchl(java.util.List<? extends java.lang.Object> sigchl) {
                this.sigchl = sigchl;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getStatus}
             * @param status the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(java.lang.String status) {
                this.status = status;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getStatus}
             * @param status the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
                this.status = status;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getTimer}
             * @param timer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timer(com.aliyun.ros.cdk.core.IResolvable timer) {
                this.timer = timer;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getTimer}
             * @param timer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timer(com.aliyun.ros.cdk.esa.RosWafRule.TimerProperty timer) {
                this.timer = timer;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigProperty {
            private final java.lang.Object action;
            private final java.lang.Object actions;
            private final java.lang.Object appPackage;
            private final java.lang.Object appSdk;
            private final java.lang.Object expression;
            private final java.lang.Object identity;
            private final java.lang.Object managedGroupId;
            private final java.lang.Object managedList;
            private final java.lang.Object managedRulesets;
            private final java.lang.Object name;
            private final java.lang.Object notes;
            private final java.lang.Object rateLimit;
            private final java.lang.Object securityLevel;
            private final java.lang.Object sigchl;
            private final java.lang.Object status;
            private final java.lang.Object timer;
            private final java.lang.Object type;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.action = software.amazon.jsii.Kernel.get(this, "action", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.actions = software.amazon.jsii.Kernel.get(this, "actions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.appPackage = software.amazon.jsii.Kernel.get(this, "appPackage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.appSdk = software.amazon.jsii.Kernel.get(this, "appSdk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.expression = software.amazon.jsii.Kernel.get(this, "expression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.identity = software.amazon.jsii.Kernel.get(this, "identity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.managedGroupId = software.amazon.jsii.Kernel.get(this, "managedGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.managedList = software.amazon.jsii.Kernel.get(this, "managedList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.managedRulesets = software.amazon.jsii.Kernel.get(this, "managedRulesets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.notes = software.amazon.jsii.Kernel.get(this, "notes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rateLimit = software.amazon.jsii.Kernel.get(this, "rateLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityLevel = software.amazon.jsii.Kernel.get(this, "securityLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sigchl = software.amazon.jsii.Kernel.get(this, "sigchl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timer = software.amazon.jsii.Kernel.get(this, "timer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.action = builder.action;
                this.actions = builder.actions;
                this.appPackage = builder.appPackage;
                this.appSdk = builder.appSdk;
                this.expression = builder.expression;
                this.identity = builder.identity;
                this.managedGroupId = builder.managedGroupId;
                this.managedList = builder.managedList;
                this.managedRulesets = builder.managedRulesets;
                this.name = builder.name;
                this.notes = builder.notes;
                this.rateLimit = builder.rateLimit;
                this.securityLevel = builder.securityLevel;
                this.sigchl = builder.sigchl;
                this.status = builder.status;
                this.timer = builder.timer;
                this.type = builder.type;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getAction() {
                return this.action;
            }

            @Override
            public final java.lang.Object getActions() {
                return this.actions;
            }

            @Override
            public final java.lang.Object getAppPackage() {
                return this.appPackage;
            }

            @Override
            public final java.lang.Object getAppSdk() {
                return this.appSdk;
            }

            @Override
            public final java.lang.Object getExpression() {
                return this.expression;
            }

            @Override
            public final java.lang.Object getIdentity() {
                return this.identity;
            }

            @Override
            public final java.lang.Object getManagedGroupId() {
                return this.managedGroupId;
            }

            @Override
            public final java.lang.Object getManagedList() {
                return this.managedList;
            }

            @Override
            public final java.lang.Object getManagedRulesets() {
                return this.managedRulesets;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getNotes() {
                return this.notes;
            }

            @Override
            public final java.lang.Object getRateLimit() {
                return this.rateLimit;
            }

            @Override
            public final java.lang.Object getSecurityLevel() {
                return this.securityLevel;
            }

            @Override
            public final java.lang.Object getSigchl() {
                return this.sigchl;
            }

            @Override
            public final java.lang.Object getStatus() {
                return this.status;
            }

            @Override
            public final java.lang.Object getTimer() {
                return this.timer;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAction() != null) {
                    data.set("action", om.valueToTree(this.getAction()));
                }
                if (this.getActions() != null) {
                    data.set("actions", om.valueToTree(this.getActions()));
                }
                if (this.getAppPackage() != null) {
                    data.set("appPackage", om.valueToTree(this.getAppPackage()));
                }
                if (this.getAppSdk() != null) {
                    data.set("appSdk", om.valueToTree(this.getAppSdk()));
                }
                if (this.getExpression() != null) {
                    data.set("expression", om.valueToTree(this.getExpression()));
                }
                if (this.getIdentity() != null) {
                    data.set("identity", om.valueToTree(this.getIdentity()));
                }
                if (this.getManagedGroupId() != null) {
                    data.set("managedGroupId", om.valueToTree(this.getManagedGroupId()));
                }
                if (this.getManagedList() != null) {
                    data.set("managedList", om.valueToTree(this.getManagedList()));
                }
                if (this.getManagedRulesets() != null) {
                    data.set("managedRulesets", om.valueToTree(this.getManagedRulesets()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getNotes() != null) {
                    data.set("notes", om.valueToTree(this.getNotes()));
                }
                if (this.getRateLimit() != null) {
                    data.set("rateLimit", om.valueToTree(this.getRateLimit()));
                }
                if (this.getSecurityLevel() != null) {
                    data.set("securityLevel", om.valueToTree(this.getSecurityLevel()));
                }
                if (this.getSigchl() != null) {
                    data.set("sigchl", om.valueToTree(this.getSigchl()));
                }
                if (this.getStatus() != null) {
                    data.set("status", om.valueToTree(this.getStatus()));
                }
                if (this.getTimer() != null) {
                    data.set("timer", om.valueToTree(this.getTimer()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.ConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConfigProperty.Jsii$Proxy that = (ConfigProperty.Jsii$Proxy) o;

                if (this.action != null ? !this.action.equals(that.action) : that.action != null) return false;
                if (this.actions != null ? !this.actions.equals(that.actions) : that.actions != null) return false;
                if (this.appPackage != null ? !this.appPackage.equals(that.appPackage) : that.appPackage != null) return false;
                if (this.appSdk != null ? !this.appSdk.equals(that.appSdk) : that.appSdk != null) return false;
                if (this.expression != null ? !this.expression.equals(that.expression) : that.expression != null) return false;
                if (this.identity != null ? !this.identity.equals(that.identity) : that.identity != null) return false;
                if (this.managedGroupId != null ? !this.managedGroupId.equals(that.managedGroupId) : that.managedGroupId != null) return false;
                if (this.managedList != null ? !this.managedList.equals(that.managedList) : that.managedList != null) return false;
                if (this.managedRulesets != null ? !this.managedRulesets.equals(that.managedRulesets) : that.managedRulesets != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.notes != null ? !this.notes.equals(that.notes) : that.notes != null) return false;
                if (this.rateLimit != null ? !this.rateLimit.equals(that.rateLimit) : that.rateLimit != null) return false;
                if (this.securityLevel != null ? !this.securityLevel.equals(that.securityLevel) : that.securityLevel != null) return false;
                if (this.sigchl != null ? !this.sigchl.equals(that.sigchl) : that.sigchl != null) return false;
                if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
                if (this.timer != null ? !this.timer.equals(that.timer) : that.timer != null) return false;
                if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.action != null ? this.action.hashCode() : 0;
                result = 31 * result + (this.actions != null ? this.actions.hashCode() : 0);
                result = 31 * result + (this.appPackage != null ? this.appPackage.hashCode() : 0);
                result = 31 * result + (this.appSdk != null ? this.appSdk.hashCode() : 0);
                result = 31 * result + (this.expression != null ? this.expression.hashCode() : 0);
                result = 31 * result + (this.identity != null ? this.identity.hashCode() : 0);
                result = 31 * result + (this.managedGroupId != null ? this.managedGroupId.hashCode() : 0);
                result = 31 * result + (this.managedList != null ? this.managedList.hashCode() : 0);
                result = 31 * result + (this.managedRulesets != null ? this.managedRulesets.hashCode() : 0);
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.notes != null ? this.notes.hashCode() : 0);
                result = 31 * result + (this.rateLimit != null ? this.rateLimit.hashCode() : 0);
                result = 31 * result + (this.securityLevel != null ? this.securityLevel.hashCode() : 0);
                result = 31 * result + (this.sigchl != null ? this.sigchl.hashCode() : 0);
                result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
                result = 31 * result + (this.timer != null ? this.timer.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.CriteriaCriteriaCriteriaProperty")
    @software.amazon.jsii.Jsii.Proxy(CriteriaCriteriaCriteriaProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CriteriaCriteriaCriteriaProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CriteriaCriteriaCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CriteriaCriteriaCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CriteriaCriteriaCriteriaProperty> {
            java.lang.Object matchType;

            /**
             * Sets the value of {@link CriteriaCriteriaCriteriaProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link CriteriaCriteriaCriteriaProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CriteriaCriteriaCriteriaProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CriteriaCriteriaCriteriaProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CriteriaCriteriaCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CriteriaCriteriaCriteriaProperty {
            private final java.lang.Object matchType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.matchType = builder.matchType;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.CriteriaCriteriaCriteriaProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CriteriaCriteriaCriteriaProperty.Jsii$Proxy that = (CriteriaCriteriaCriteriaProperty.Jsii$Proxy) o;

                return this.matchType != null ? this.matchType.equals(that.matchType) : that.matchType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.matchType != null ? this.matchType.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.CriteriaCriteriaProperty")
    @software.amazon.jsii.Jsii.Proxy(CriteriaCriteriaProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CriteriaCriteriaProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCriteria() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogic() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CriteriaCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CriteriaCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CriteriaCriteriaProperty> {
            java.lang.Object criteria;
            java.lang.Object logic;
            java.lang.Object matchType;

            /**
             * Sets the value of {@link CriteriaCriteriaProperty#getCriteria}
             * @param criteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder criteria(com.aliyun.ros.cdk.core.IResolvable criteria) {
                this.criteria = criteria;
                return this;
            }

            /**
             * Sets the value of {@link CriteriaCriteriaProperty#getCriteria}
             * @param criteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder criteria(java.util.List<? extends java.lang.Object> criteria) {
                this.criteria = criteria;
                return this;
            }

            /**
             * Sets the value of {@link CriteriaCriteriaProperty#getLogic}
             * @param logic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logic(java.lang.String logic) {
                this.logic = logic;
                return this;
            }

            /**
             * Sets the value of {@link CriteriaCriteriaProperty#getLogic}
             * @param logic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logic(com.aliyun.ros.cdk.core.IResolvable logic) {
                this.logic = logic;
                return this;
            }

            /**
             * Sets the value of {@link CriteriaCriteriaProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link CriteriaCriteriaProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CriteriaCriteriaProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CriteriaCriteriaProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CriteriaCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CriteriaCriteriaProperty {
            private final java.lang.Object criteria;
            private final java.lang.Object logic;
            private final java.lang.Object matchType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.criteria = software.amazon.jsii.Kernel.get(this, "criteria", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logic = software.amazon.jsii.Kernel.get(this, "logic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.criteria = builder.criteria;
                this.logic = builder.logic;
                this.matchType = builder.matchType;
            }

            @Override
            public final java.lang.Object getCriteria() {
                return this.criteria;
            }

            @Override
            public final java.lang.Object getLogic() {
                return this.logic;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCriteria() != null) {
                    data.set("criteria", om.valueToTree(this.getCriteria()));
                }
                if (this.getLogic() != null) {
                    data.set("logic", om.valueToTree(this.getLogic()));
                }
                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.CriteriaCriteriaProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CriteriaCriteriaProperty.Jsii$Proxy that = (CriteriaCriteriaProperty.Jsii$Proxy) o;

                if (this.criteria != null ? !this.criteria.equals(that.criteria) : that.criteria != null) return false;
                if (this.logic != null ? !this.logic.equals(that.logic) : that.logic != null) return false;
                return this.matchType != null ? this.matchType.equals(that.matchType) : that.matchType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.criteria != null ? this.criteria.hashCode() : 0;
                result = 31 * result + (this.logic != null ? this.logic.hashCode() : 0);
                result = 31 * result + (this.matchType != null ? this.matchType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.CriteriaProperty")
    @software.amazon.jsii.Jsii.Proxy(CriteriaProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CriteriaProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCriteria() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogic() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CriteriaProperty> {
            java.lang.Object criteria;
            java.lang.Object logic;
            java.lang.Object matchType;

            /**
             * Sets the value of {@link CriteriaProperty#getCriteria}
             * @param criteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder criteria(com.aliyun.ros.cdk.core.IResolvable criteria) {
                this.criteria = criteria;
                return this;
            }

            /**
             * Sets the value of {@link CriteriaProperty#getCriteria}
             * @param criteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder criteria(java.util.List<? extends java.lang.Object> criteria) {
                this.criteria = criteria;
                return this;
            }

            /**
             * Sets the value of {@link CriteriaProperty#getLogic}
             * @param logic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logic(java.lang.String logic) {
                this.logic = logic;
                return this;
            }

            /**
             * Sets the value of {@link CriteriaProperty#getLogic}
             * @param logic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logic(com.aliyun.ros.cdk.core.IResolvable logic) {
                this.logic = logic;
                return this;
            }

            /**
             * Sets the value of {@link CriteriaProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link CriteriaProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CriteriaProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CriteriaProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CriteriaProperty {
            private final java.lang.Object criteria;
            private final java.lang.Object logic;
            private final java.lang.Object matchType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.criteria = software.amazon.jsii.Kernel.get(this, "criteria", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logic = software.amazon.jsii.Kernel.get(this, "logic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.criteria = builder.criteria;
                this.logic = builder.logic;
                this.matchType = builder.matchType;
            }

            @Override
            public final java.lang.Object getCriteria() {
                return this.criteria;
            }

            @Override
            public final java.lang.Object getLogic() {
                return this.logic;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCriteria() != null) {
                    data.set("criteria", om.valueToTree(this.getCriteria()));
                }
                if (this.getLogic() != null) {
                    data.set("logic", om.valueToTree(this.getLogic()));
                }
                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.CriteriaProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CriteriaProperty.Jsii$Proxy that = (CriteriaProperty.Jsii$Proxy) o;

                if (this.criteria != null ? !this.criteria.equals(that.criteria) : that.criteria != null) return false;
                if (this.logic != null ? !this.logic.equals(that.logic) : that.logic != null) return false;
                return this.matchType != null ? this.matchType.equals(that.matchType) : that.matchType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.criteria != null ? this.criteria.hashCode() : 0;
                result = 31 * result + (this.logic != null ? this.logic.hashCode() : 0);
                result = 31 * result + (this.matchType != null ? this.matchType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.CustomSignProperty")
    @software.amazon.jsii.Jsii.Proxy(CustomSignProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CustomSignProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CustomSignProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CustomSignProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CustomSignProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link CustomSignProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link CustomSignProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link CustomSignProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link CustomSignProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CustomSignProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CustomSignProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CustomSignProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomSignProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.CustomSignProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CustomSignProperty.Jsii$Proxy that = (CustomSignProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.DailyPeriodsProperty")
    @software.amazon.jsii.Jsii.Proxy(DailyPeriodsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DailyPeriodsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnd() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStart() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DailyPeriodsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DailyPeriodsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DailyPeriodsProperty> {
            java.lang.Object end;
            java.lang.Object start;

            /**
             * Sets the value of {@link DailyPeriodsProperty#getEnd}
             * @param end the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder end(java.lang.String end) {
                this.end = end;
                return this;
            }

            /**
             * Sets the value of {@link DailyPeriodsProperty#getEnd}
             * @param end the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder end(com.aliyun.ros.cdk.core.IResolvable end) {
                this.end = end;
                return this;
            }

            /**
             * Sets the value of {@link DailyPeriodsProperty#getStart}
             * @param start the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder start(java.lang.String start) {
                this.start = start;
                return this;
            }

            /**
             * Sets the value of {@link DailyPeriodsProperty#getStart}
             * @param start the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder start(com.aliyun.ros.cdk.core.IResolvable start) {
                this.start = start;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DailyPeriodsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DailyPeriodsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DailyPeriodsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DailyPeriodsProperty {
            private final java.lang.Object end;
            private final java.lang.Object start;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.end = software.amazon.jsii.Kernel.get(this, "end", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.start = software.amazon.jsii.Kernel.get(this, "start", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.end = builder.end;
                this.start = builder.start;
            }

            @Override
            public final java.lang.Object getEnd() {
                return this.end;
            }

            @Override
            public final java.lang.Object getStart() {
                return this.start;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnd() != null) {
                    data.set("end", om.valueToTree(this.getEnd()));
                }
                if (this.getStart() != null) {
                    data.set("start", om.valueToTree(this.getStart()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.DailyPeriodsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DailyPeriodsProperty.Jsii$Proxy that = (DailyPeriodsProperty.Jsii$Proxy) o;

                if (this.end != null ? !this.end.equals(that.end) : that.end != null) return false;
                return this.start != null ? this.start.equals(that.start) : that.start == null;
            }

            @Override
            public final int hashCode() {
                int result = this.end != null ? this.end.hashCode() : 0;
                result = 31 * result + (this.start != null ? this.start.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.ManagedRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(ManagedRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ManagedRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAction() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIdentity() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ManagedRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ManagedRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ManagedRulesProperty> {
            java.lang.Object action;
            java.lang.Object identity;
            java.lang.Object status;

            /**
             * Sets the value of {@link ManagedRulesProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(java.lang.String action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(com.aliyun.ros.cdk.core.IResolvable action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(java.lang.Number identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(com.aliyun.ros.cdk.core.IResolvable identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesProperty#getStatus}
             * @param status the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(java.lang.String status) {
                this.status = status;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesProperty#getStatus}
             * @param status the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
                this.status = status;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ManagedRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ManagedRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ManagedRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ManagedRulesProperty {
            private final java.lang.Object action;
            private final java.lang.Object identity;
            private final java.lang.Object status;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.action = software.amazon.jsii.Kernel.get(this, "action", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.identity = software.amazon.jsii.Kernel.get(this, "identity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.action = builder.action;
                this.identity = builder.identity;
                this.status = builder.status;
            }

            @Override
            public final java.lang.Object getAction() {
                return this.action;
            }

            @Override
            public final java.lang.Object getIdentity() {
                return this.identity;
            }

            @Override
            public final java.lang.Object getStatus() {
                return this.status;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAction() != null) {
                    data.set("action", om.valueToTree(this.getAction()));
                }
                if (this.getIdentity() != null) {
                    data.set("identity", om.valueToTree(this.getIdentity()));
                }
                if (this.getStatus() != null) {
                    data.set("status", om.valueToTree(this.getStatus()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.ManagedRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ManagedRulesProperty.Jsii$Proxy that = (ManagedRulesProperty.Jsii$Proxy) o;

                if (this.action != null ? !this.action.equals(that.action) : that.action != null) return false;
                if (this.identity != null ? !this.identity.equals(that.identity) : that.identity != null) return false;
                return this.status != null ? this.status.equals(that.status) : that.status == null;
            }

            @Override
            public final int hashCode() {
                int result = this.action != null ? this.action.hashCode() : 0;
                result = 31 * result + (this.identity != null ? this.identity.hashCode() : 0);
                result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.ManagedRulesetsProperty")
    @software.amazon.jsii.Jsii.Proxy(ManagedRulesetsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ManagedRulesetsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAction() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAttackType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getManagedRules() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNumberEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNumberTotal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProtectionLevel() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ManagedRulesetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ManagedRulesetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ManagedRulesetsProperty> {
            java.lang.Object action;
            java.lang.Object attackType;
            java.lang.Object managedRules;
            java.lang.Object numberEnabled;
            java.lang.Object numberTotal;
            java.lang.Object protectionLevel;

            /**
             * Sets the value of {@link ManagedRulesetsProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(java.lang.String action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesetsProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(com.aliyun.ros.cdk.core.IResolvable action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesetsProperty#getAttackType}
             * @param attackType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder attackType(java.lang.Number attackType) {
                this.attackType = attackType;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesetsProperty#getAttackType}
             * @param attackType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder attackType(com.aliyun.ros.cdk.core.IResolvable attackType) {
                this.attackType = attackType;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesetsProperty#getManagedRules}
             * @param managedRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedRules(com.aliyun.ros.cdk.core.IResolvable managedRules) {
                this.managedRules = managedRules;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesetsProperty#getManagedRules}
             * @param managedRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedRules(java.util.List<? extends java.lang.Object> managedRules) {
                this.managedRules = managedRules;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesetsProperty#getNumberEnabled}
             * @param numberEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numberEnabled(java.lang.Number numberEnabled) {
                this.numberEnabled = numberEnabled;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesetsProperty#getNumberEnabled}
             * @param numberEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numberEnabled(com.aliyun.ros.cdk.core.IResolvable numberEnabled) {
                this.numberEnabled = numberEnabled;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesetsProperty#getNumberTotal}
             * @param numberTotal the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numberTotal(java.lang.Number numberTotal) {
                this.numberTotal = numberTotal;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesetsProperty#getNumberTotal}
             * @param numberTotal the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numberTotal(com.aliyun.ros.cdk.core.IResolvable numberTotal) {
                this.numberTotal = numberTotal;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesetsProperty#getProtectionLevel}
             * @param protectionLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protectionLevel(java.lang.Number protectionLevel) {
                this.protectionLevel = protectionLevel;
                return this;
            }

            /**
             * Sets the value of {@link ManagedRulesetsProperty#getProtectionLevel}
             * @param protectionLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protectionLevel(com.aliyun.ros.cdk.core.IResolvable protectionLevel) {
                this.protectionLevel = protectionLevel;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ManagedRulesetsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ManagedRulesetsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ManagedRulesetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ManagedRulesetsProperty {
            private final java.lang.Object action;
            private final java.lang.Object attackType;
            private final java.lang.Object managedRules;
            private final java.lang.Object numberEnabled;
            private final java.lang.Object numberTotal;
            private final java.lang.Object protectionLevel;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.action = software.amazon.jsii.Kernel.get(this, "action", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.attackType = software.amazon.jsii.Kernel.get(this, "attackType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.managedRules = software.amazon.jsii.Kernel.get(this, "managedRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.numberEnabled = software.amazon.jsii.Kernel.get(this, "numberEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.numberTotal = software.amazon.jsii.Kernel.get(this, "numberTotal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protectionLevel = software.amazon.jsii.Kernel.get(this, "protectionLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.action = builder.action;
                this.attackType = builder.attackType;
                this.managedRules = builder.managedRules;
                this.numberEnabled = builder.numberEnabled;
                this.numberTotal = builder.numberTotal;
                this.protectionLevel = builder.protectionLevel;
            }

            @Override
            public final java.lang.Object getAction() {
                return this.action;
            }

            @Override
            public final java.lang.Object getAttackType() {
                return this.attackType;
            }

            @Override
            public final java.lang.Object getManagedRules() {
                return this.managedRules;
            }

            @Override
            public final java.lang.Object getNumberEnabled() {
                return this.numberEnabled;
            }

            @Override
            public final java.lang.Object getNumberTotal() {
                return this.numberTotal;
            }

            @Override
            public final java.lang.Object getProtectionLevel() {
                return this.protectionLevel;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAction() != null) {
                    data.set("action", om.valueToTree(this.getAction()));
                }
                if (this.getAttackType() != null) {
                    data.set("attackType", om.valueToTree(this.getAttackType()));
                }
                if (this.getManagedRules() != null) {
                    data.set("managedRules", om.valueToTree(this.getManagedRules()));
                }
                if (this.getNumberEnabled() != null) {
                    data.set("numberEnabled", om.valueToTree(this.getNumberEnabled()));
                }
                if (this.getNumberTotal() != null) {
                    data.set("numberTotal", om.valueToTree(this.getNumberTotal()));
                }
                if (this.getProtectionLevel() != null) {
                    data.set("protectionLevel", om.valueToTree(this.getProtectionLevel()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.ManagedRulesetsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ManagedRulesetsProperty.Jsii$Proxy that = (ManagedRulesetsProperty.Jsii$Proxy) o;

                if (this.action != null ? !this.action.equals(that.action) : that.action != null) return false;
                if (this.attackType != null ? !this.attackType.equals(that.attackType) : that.attackType != null) return false;
                if (this.managedRules != null ? !this.managedRules.equals(that.managedRules) : that.managedRules != null) return false;
                if (this.numberEnabled != null ? !this.numberEnabled.equals(that.numberEnabled) : that.numberEnabled != null) return false;
                if (this.numberTotal != null ? !this.numberTotal.equals(that.numberTotal) : that.numberTotal != null) return false;
                return this.protectionLevel != null ? this.protectionLevel.equals(that.protectionLevel) : that.protectionLevel == null;
            }

            @Override
            public final int hashCode() {
                int result = this.action != null ? this.action.hashCode() : 0;
                result = 31 * result + (this.attackType != null ? this.attackType.hashCode() : 0);
                result = 31 * result + (this.managedRules != null ? this.managedRules.hashCode() : 0);
                result = 31 * result + (this.numberEnabled != null ? this.numberEnabled.hashCode() : 0);
                result = 31 * result + (this.numberTotal != null ? this.numberTotal.hashCode() : 0);
                result = 31 * result + (this.protectionLevel != null ? this.protectionLevel.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.MatchProperty")
    @software.amazon.jsii.Jsii.Proxy(MatchProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MatchProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCriteria() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogic() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MatchProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MatchProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MatchProperty> {
            java.lang.Object criteria;
            java.lang.Object logic;
            java.lang.Object matchType;

            /**
             * Sets the value of {@link MatchProperty#getCriteria}
             * @param criteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder criteria(com.aliyun.ros.cdk.core.IResolvable criteria) {
                this.criteria = criteria;
                return this;
            }

            /**
             * Sets the value of {@link MatchProperty#getCriteria}
             * @param criteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder criteria(java.util.List<? extends java.lang.Object> criteria) {
                this.criteria = criteria;
                return this;
            }

            /**
             * Sets the value of {@link MatchProperty#getLogic}
             * @param logic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logic(java.lang.String logic) {
                this.logic = logic;
                return this;
            }

            /**
             * Sets the value of {@link MatchProperty#getLogic}
             * @param logic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logic(com.aliyun.ros.cdk.core.IResolvable logic) {
                this.logic = logic;
                return this;
            }

            /**
             * Sets the value of {@link MatchProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link MatchProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MatchProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MatchProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MatchProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MatchProperty {
            private final java.lang.Object criteria;
            private final java.lang.Object logic;
            private final java.lang.Object matchType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.criteria = software.amazon.jsii.Kernel.get(this, "criteria", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logic = software.amazon.jsii.Kernel.get(this, "logic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.criteria = builder.criteria;
                this.logic = builder.logic;
                this.matchType = builder.matchType;
            }

            @Override
            public final java.lang.Object getCriteria() {
                return this.criteria;
            }

            @Override
            public final java.lang.Object getLogic() {
                return this.logic;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCriteria() != null) {
                    data.set("criteria", om.valueToTree(this.getCriteria()));
                }
                if (this.getLogic() != null) {
                    data.set("logic", om.valueToTree(this.getLogic()));
                }
                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.MatchProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MatchProperty.Jsii$Proxy that = (MatchProperty.Jsii$Proxy) o;

                if (this.criteria != null ? !this.criteria.equals(that.criteria) : that.criteria != null) return false;
                if (this.logic != null ? !this.logic.equals(that.logic) : that.logic != null) return false;
                return this.matchType != null ? this.matchType.equals(that.matchType) : that.matchType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.criteria != null ? this.criteria.hashCode() : 0;
                result = 31 * result + (this.logic != null ? this.logic.hashCode() : 0);
                result = 31 * result + (this.matchType != null ? this.matchType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.PackageSignsProperty")
    @software.amazon.jsii.Jsii.Proxy(PackageSignsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PackageSignsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSign() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PackageSignsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PackageSignsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PackageSignsProperty> {
            java.lang.Object name;
            java.lang.Object sign;

            /**
             * Sets the value of {@link PackageSignsProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link PackageSignsProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link PackageSignsProperty#getSign}
             * @param sign the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sign(java.lang.String sign) {
                this.sign = sign;
                return this;
            }

            /**
             * Sets the value of {@link PackageSignsProperty#getSign}
             * @param sign the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sign(com.aliyun.ros.cdk.core.IResolvable sign) {
                this.sign = sign;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PackageSignsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PackageSignsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PackageSignsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PackageSignsProperty {
            private final java.lang.Object name;
            private final java.lang.Object sign;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sign = software.amazon.jsii.Kernel.get(this, "sign", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = builder.name;
                this.sign = builder.sign;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getSign() {
                return this.sign;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getSign() != null) {
                    data.set("sign", om.valueToTree(this.getSign()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.PackageSignsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PackageSignsProperty.Jsii$Proxy that = (PackageSignsProperty.Jsii$Proxy) o;

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.sign != null ? this.sign.equals(that.sign) : that.sign == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.sign != null ? this.sign.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.PeriodsProperty")
    @software.amazon.jsii.Jsii.Proxy(PeriodsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PeriodsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnd() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStart() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PeriodsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PeriodsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PeriodsProperty> {
            java.lang.Object end;
            java.lang.Object start;

            /**
             * Sets the value of {@link PeriodsProperty#getEnd}
             * @param end the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder end(java.lang.String end) {
                this.end = end;
                return this;
            }

            /**
             * Sets the value of {@link PeriodsProperty#getEnd}
             * @param end the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder end(com.aliyun.ros.cdk.core.IResolvable end) {
                this.end = end;
                return this;
            }

            /**
             * Sets the value of {@link PeriodsProperty#getStart}
             * @param start the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder start(java.lang.String start) {
                this.start = start;
                return this;
            }

            /**
             * Sets the value of {@link PeriodsProperty#getStart}
             * @param start the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder start(com.aliyun.ros.cdk.core.IResolvable start) {
                this.start = start;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PeriodsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PeriodsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PeriodsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PeriodsProperty {
            private final java.lang.Object end;
            private final java.lang.Object start;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.end = software.amazon.jsii.Kernel.get(this, "end", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.start = software.amazon.jsii.Kernel.get(this, "start", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.end = builder.end;
                this.start = builder.start;
            }

            @Override
            public final java.lang.Object getEnd() {
                return this.end;
            }

            @Override
            public final java.lang.Object getStart() {
                return this.start;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnd() != null) {
                    data.set("end", om.valueToTree(this.getEnd()));
                }
                if (this.getStart() != null) {
                    data.set("start", om.valueToTree(this.getStart()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.PeriodsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PeriodsProperty.Jsii$Proxy that = (PeriodsProperty.Jsii$Proxy) o;

                if (this.end != null ? !this.end.equals(that.end) : that.end != null) return false;
                return this.start != null ? this.start.equals(that.start) : that.start == null;
            }

            @Override
            public final int hashCode() {
                int result = this.end != null ? this.end.hashCode() : 0;
                result = 31 * result + (this.start != null ? this.start.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.RateLimitProperty")
    @software.amazon.jsii.Jsii.Proxy(RateLimitProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RateLimitProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCharacteristics() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInterval() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOnHit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTtl() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RateLimitProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RateLimitProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RateLimitProperty> {
            java.lang.Object characteristics;
            java.lang.Object interval;
            java.lang.Object onHit;
            java.lang.Object threshold;
            java.lang.Object ttl;

            /**
             * Sets the value of {@link RateLimitProperty#getCharacteristics}
             * @param characteristics the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder characteristics(com.aliyun.ros.cdk.core.IResolvable characteristics) {
                this.characteristics = characteristics;
                return this;
            }

            /**
             * Sets the value of {@link RateLimitProperty#getCharacteristics}
             * @param characteristics the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder characteristics(com.aliyun.ros.cdk.esa.RosWafRule.CharacteristicsProperty characteristics) {
                this.characteristics = characteristics;
                return this;
            }

            /**
             * Sets the value of {@link RateLimitProperty#getInterval}
             * @param interval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder interval(java.lang.Number interval) {
                this.interval = interval;
                return this;
            }

            /**
             * Sets the value of {@link RateLimitProperty#getInterval}
             * @param interval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder interval(com.aliyun.ros.cdk.core.IResolvable interval) {
                this.interval = interval;
                return this;
            }

            /**
             * Sets the value of {@link RateLimitProperty#getOnHit}
             * @param onHit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onHit(java.lang.Boolean onHit) {
                this.onHit = onHit;
                return this;
            }

            /**
             * Sets the value of {@link RateLimitProperty#getOnHit}
             * @param onHit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onHit(com.aliyun.ros.cdk.core.IResolvable onHit) {
                this.onHit = onHit;
                return this;
            }

            /**
             * Sets the value of {@link RateLimitProperty#getThreshold}
             * @param threshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(com.aliyun.ros.cdk.core.IResolvable threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Sets the value of {@link RateLimitProperty#getThreshold}
             * @param threshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(com.aliyun.ros.cdk.esa.RosWafRule.ThresholdProperty threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Sets the value of {@link RateLimitProperty#getTtl}
             * @param ttl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ttl(java.lang.Number ttl) {
                this.ttl = ttl;
                return this;
            }

            /**
             * Sets the value of {@link RateLimitProperty#getTtl}
             * @param ttl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ttl(com.aliyun.ros.cdk.core.IResolvable ttl) {
                this.ttl = ttl;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RateLimitProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RateLimitProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RateLimitProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RateLimitProperty {
            private final java.lang.Object characteristics;
            private final java.lang.Object interval;
            private final java.lang.Object onHit;
            private final java.lang.Object threshold;
            private final java.lang.Object ttl;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.characteristics = software.amazon.jsii.Kernel.get(this, "characteristics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.interval = software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.onHit = software.amazon.jsii.Kernel.get(this, "onHit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.threshold = software.amazon.jsii.Kernel.get(this, "threshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ttl = software.amazon.jsii.Kernel.get(this, "ttl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.characteristics = builder.characteristics;
                this.interval = builder.interval;
                this.onHit = builder.onHit;
                this.threshold = builder.threshold;
                this.ttl = builder.ttl;
            }

            @Override
            public final java.lang.Object getCharacteristics() {
                return this.characteristics;
            }

            @Override
            public final java.lang.Object getInterval() {
                return this.interval;
            }

            @Override
            public final java.lang.Object getOnHit() {
                return this.onHit;
            }

            @Override
            public final java.lang.Object getThreshold() {
                return this.threshold;
            }

            @Override
            public final java.lang.Object getTtl() {
                return this.ttl;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCharacteristics() != null) {
                    data.set("characteristics", om.valueToTree(this.getCharacteristics()));
                }
                if (this.getInterval() != null) {
                    data.set("interval", om.valueToTree(this.getInterval()));
                }
                if (this.getOnHit() != null) {
                    data.set("onHit", om.valueToTree(this.getOnHit()));
                }
                if (this.getThreshold() != null) {
                    data.set("threshold", om.valueToTree(this.getThreshold()));
                }
                if (this.getTtl() != null) {
                    data.set("ttl", om.valueToTree(this.getTtl()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.RateLimitProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RateLimitProperty.Jsii$Proxy that = (RateLimitProperty.Jsii$Proxy) o;

                if (this.characteristics != null ? !this.characteristics.equals(that.characteristics) : that.characteristics != null) return false;
                if (this.interval != null ? !this.interval.equals(that.interval) : that.interval != null) return false;
                if (this.onHit != null ? !this.onHit.equals(that.onHit) : that.onHit != null) return false;
                if (this.threshold != null ? !this.threshold.equals(that.threshold) : that.threshold != null) return false;
                return this.ttl != null ? this.ttl.equals(that.ttl) : that.ttl == null;
            }

            @Override
            public final int hashCode() {
                int result = this.characteristics != null ? this.characteristics.hashCode() : 0;
                result = 31 * result + (this.interval != null ? this.interval.hashCode() : 0);
                result = 31 * result + (this.onHit != null ? this.onHit.hashCode() : 0);
                result = 31 * result + (this.threshold != null ? this.threshold.hashCode() : 0);
                result = 31 * result + (this.ttl != null ? this.ttl.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.ResponseProperty")
    @software.amazon.jsii.Jsii.Proxy(ResponseProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResponseProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIdentity() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ResponseProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResponseProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResponseProperty> {
            java.lang.Object code;
            java.lang.Object identity;

            /**
             * Sets the value of {@link ResponseProperty#getCode}
             * @param code the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder code(java.lang.Number code) {
                this.code = code;
                return this;
            }

            /**
             * Sets the value of {@link ResponseProperty#getCode}
             * @param code the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder code(com.aliyun.ros.cdk.core.IResolvable code) {
                this.code = code;
                return this;
            }

            /**
             * Sets the value of {@link ResponseProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(java.lang.Number identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Sets the value of {@link ResponseProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(com.aliyun.ros.cdk.core.IResolvable identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResponseProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResponseProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResponseProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResponseProperty {
            private final java.lang.Object code;
            private final java.lang.Object identity;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.code = software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.identity = software.amazon.jsii.Kernel.get(this, "identity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.code = builder.code;
                this.identity = builder.identity;
            }

            @Override
            public final java.lang.Object getCode() {
                return this.code;
            }

            @Override
            public final java.lang.Object getIdentity() {
                return this.identity;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCode() != null) {
                    data.set("code", om.valueToTree(this.getCode()));
                }
                if (this.getIdentity() != null) {
                    data.set("identity", om.valueToTree(this.getIdentity()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.ResponseProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResponseProperty.Jsii$Proxy that = (ResponseProperty.Jsii$Proxy) o;

                if (this.code != null ? !this.code.equals(that.code) : that.code != null) return false;
                return this.identity != null ? this.identity.equals(that.identity) : that.identity == null;
            }

            @Override
            public final int hashCode() {
                int result = this.code != null ? this.code.hashCode() : 0;
                result = 31 * result + (this.identity != null ? this.identity.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.ResponseStatusProperty")
    @software.amazon.jsii.Jsii.Proxy(ResponseStatusProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResponseStatusProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRatio() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ResponseStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResponseStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResponseStatusProperty> {
            java.lang.Object code;
            java.lang.Object count;
            java.lang.Object ratio;

            /**
             * Sets the value of {@link ResponseStatusProperty#getCode}
             * @param code the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder code(java.lang.Number code) {
                this.code = code;
                return this;
            }

            /**
             * Sets the value of {@link ResponseStatusProperty#getCode}
             * @param code the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder code(com.aliyun.ros.cdk.core.IResolvable code) {
                this.code = code;
                return this;
            }

            /**
             * Sets the value of {@link ResponseStatusProperty#getCount}
             * @param count the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder count(java.lang.Number count) {
                this.count = count;
                return this;
            }

            /**
             * Sets the value of {@link ResponseStatusProperty#getCount}
             * @param count the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder count(com.aliyun.ros.cdk.core.IResolvable count) {
                this.count = count;
                return this;
            }

            /**
             * Sets the value of {@link ResponseStatusProperty#getRatio}
             * @param ratio the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ratio(java.lang.Number ratio) {
                this.ratio = ratio;
                return this;
            }

            /**
             * Sets the value of {@link ResponseStatusProperty#getRatio}
             * @param ratio the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ratio(com.aliyun.ros.cdk.core.IResolvable ratio) {
                this.ratio = ratio;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResponseStatusProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResponseStatusProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResponseStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResponseStatusProperty {
            private final java.lang.Object code;
            private final java.lang.Object count;
            private final java.lang.Object ratio;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.code = software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.count = software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ratio = software.amazon.jsii.Kernel.get(this, "ratio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.code = builder.code;
                this.count = builder.count;
                this.ratio = builder.ratio;
            }

            @Override
            public final java.lang.Object getCode() {
                return this.code;
            }

            @Override
            public final java.lang.Object getCount() {
                return this.count;
            }

            @Override
            public final java.lang.Object getRatio() {
                return this.ratio;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCode() != null) {
                    data.set("code", om.valueToTree(this.getCode()));
                }
                if (this.getCount() != null) {
                    data.set("count", om.valueToTree(this.getCount()));
                }
                if (this.getRatio() != null) {
                    data.set("ratio", om.valueToTree(this.getRatio()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.ResponseStatusProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResponseStatusProperty.Jsii$Proxy that = (ResponseStatusProperty.Jsii$Proxy) o;

                if (this.code != null ? !this.code.equals(that.code) : that.code != null) return false;
                if (this.count != null ? !this.count.equals(that.count) : that.count != null) return false;
                return this.ratio != null ? this.ratio.equals(that.ratio) : that.ratio == null;
            }

            @Override
            public final int hashCode() {
                int result = this.code != null ? this.code.hashCode() : 0;
                result = 31 * result + (this.count != null ? this.count.hashCode() : 0);
                result = 31 * result + (this.ratio != null ? this.ratio.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.SecurityLevelProperty")
    @software.amazon.jsii.Jsii.Proxy(SecurityLevelProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SecurityLevelProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SecurityLevelProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SecurityLevelProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SecurityLevelProperty> {
            java.lang.Object value;

            /**
             * Sets the value of {@link SecurityLevelProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link SecurityLevelProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SecurityLevelProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SecurityLevelProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SecurityLevelProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityLevelProperty {
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.SecurityLevelProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SecurityLevelProperty.Jsii$Proxy that = (SecurityLevelProperty.Jsii$Proxy) o;

                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.value != null ? this.value.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.SharedActionsProperty")
    @software.amazon.jsii.Jsii.Proxy(SharedActionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SharedActionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResponse() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SharedActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SharedActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SharedActionsProperty> {
            java.lang.Object response;

            /**
             * Sets the value of {@link SharedActionsProperty#getResponse}
             * @param response the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder response(com.aliyun.ros.cdk.core.IResolvable response) {
                this.response = response;
                return this;
            }

            /**
             * Sets the value of {@link SharedActionsProperty#getResponse}
             * @param response the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder response(com.aliyun.ros.cdk.esa.RosWafRule.ActionsResponseProperty response) {
                this.response = response;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SharedActionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SharedActionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SharedActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SharedActionsProperty {
            private final java.lang.Object response;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.response = software.amazon.jsii.Kernel.get(this, "response", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.response = builder.response;
            }

            @Override
            public final java.lang.Object getResponse() {
                return this.response;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getResponse() != null) {
                    data.set("response", om.valueToTree(this.getResponse()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.SharedActionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SharedActionsProperty.Jsii$Proxy that = (SharedActionsProperty.Jsii$Proxy) o;

                return this.response != null ? this.response.equals(that.response) : that.response == null;
            }

            @Override
            public final int hashCode() {
                int result = this.response != null ? this.response.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.SharedProperty")
    @software.amazon.jsii.Jsii.Proxy(SharedProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SharedProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAction() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getActions() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCrossSiteId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExpression() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatch() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTarget() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SharedProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SharedProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SharedProperty> {
            java.lang.Object action;
            java.lang.Object actions;
            java.lang.Object crossSiteId;
            java.lang.Object expression;
            java.lang.Object match;
            java.lang.Object mode;
            java.lang.Object name;
            java.lang.Object target;

            /**
             * Sets the value of {@link SharedProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(java.lang.String action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(com.aliyun.ros.cdk.core.IResolvable action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getActions}
             * @param actions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actions(com.aliyun.ros.cdk.core.IResolvable actions) {
                this.actions = actions;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getActions}
             * @param actions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actions(com.aliyun.ros.cdk.esa.RosWafRule.SharedActionsProperty actions) {
                this.actions = actions;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getCrossSiteId}
             * @param crossSiteId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossSiteId(java.lang.Number crossSiteId) {
                this.crossSiteId = crossSiteId;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getCrossSiteId}
             * @param crossSiteId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossSiteId(com.aliyun.ros.cdk.core.IResolvable crossSiteId) {
                this.crossSiteId = crossSiteId;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getExpression}
             * @param expression the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expression(java.lang.String expression) {
                this.expression = expression;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getExpression}
             * @param expression the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expression(com.aliyun.ros.cdk.core.IResolvable expression) {
                this.expression = expression;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getMatch}
             * @param match the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder match(com.aliyun.ros.cdk.core.IResolvable match) {
                this.match = match;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getMatch}
             * @param match the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder match(com.aliyun.ros.cdk.esa.RosWafRule.MatchProperty match) {
                this.match = match;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getMode}
             * @param mode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mode(java.lang.String mode) {
                this.mode = mode;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getMode}
             * @param mode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
                this.mode = mode;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getTarget}
             * @param target the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder target(java.lang.String target) {
                this.target = target;
                return this;
            }

            /**
             * Sets the value of {@link SharedProperty#getTarget}
             * @param target the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder target(com.aliyun.ros.cdk.core.IResolvable target) {
                this.target = target;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SharedProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SharedProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SharedProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SharedProperty {
            private final java.lang.Object action;
            private final java.lang.Object actions;
            private final java.lang.Object crossSiteId;
            private final java.lang.Object expression;
            private final java.lang.Object match;
            private final java.lang.Object mode;
            private final java.lang.Object name;
            private final java.lang.Object target;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.action = software.amazon.jsii.Kernel.get(this, "action", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.actions = software.amazon.jsii.Kernel.get(this, "actions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.crossSiteId = software.amazon.jsii.Kernel.get(this, "crossSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.expression = software.amazon.jsii.Kernel.get(this, "expression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.match = software.amazon.jsii.Kernel.get(this, "match", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mode = software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.target = software.amazon.jsii.Kernel.get(this, "target", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.action = builder.action;
                this.actions = builder.actions;
                this.crossSiteId = builder.crossSiteId;
                this.expression = builder.expression;
                this.match = builder.match;
                this.mode = builder.mode;
                this.name = builder.name;
                this.target = builder.target;
            }

            @Override
            public final java.lang.Object getAction() {
                return this.action;
            }

            @Override
            public final java.lang.Object getActions() {
                return this.actions;
            }

            @Override
            public final java.lang.Object getCrossSiteId() {
                return this.crossSiteId;
            }

            @Override
            public final java.lang.Object getExpression() {
                return this.expression;
            }

            @Override
            public final java.lang.Object getMatch() {
                return this.match;
            }

            @Override
            public final java.lang.Object getMode() {
                return this.mode;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getTarget() {
                return this.target;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAction() != null) {
                    data.set("action", om.valueToTree(this.getAction()));
                }
                if (this.getActions() != null) {
                    data.set("actions", om.valueToTree(this.getActions()));
                }
                if (this.getCrossSiteId() != null) {
                    data.set("crossSiteId", om.valueToTree(this.getCrossSiteId()));
                }
                if (this.getExpression() != null) {
                    data.set("expression", om.valueToTree(this.getExpression()));
                }
                if (this.getMatch() != null) {
                    data.set("match", om.valueToTree(this.getMatch()));
                }
                if (this.getMode() != null) {
                    data.set("mode", om.valueToTree(this.getMode()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getTarget() != null) {
                    data.set("target", om.valueToTree(this.getTarget()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.SharedProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SharedProperty.Jsii$Proxy that = (SharedProperty.Jsii$Proxy) o;

                if (this.action != null ? !this.action.equals(that.action) : that.action != null) return false;
                if (this.actions != null ? !this.actions.equals(that.actions) : that.actions != null) return false;
                if (this.crossSiteId != null ? !this.crossSiteId.equals(that.crossSiteId) : that.crossSiteId != null) return false;
                if (this.expression != null ? !this.expression.equals(that.expression) : that.expression != null) return false;
                if (this.match != null ? !this.match.equals(that.match) : that.match != null) return false;
                if (this.mode != null ? !this.mode.equals(that.mode) : that.mode != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.target != null ? this.target.equals(that.target) : that.target == null;
            }

            @Override
            public final int hashCode() {
                int result = this.action != null ? this.action.hashCode() : 0;
                result = 31 * result + (this.actions != null ? this.actions.hashCode() : 0);
                result = 31 * result + (this.crossSiteId != null ? this.crossSiteId.hashCode() : 0);
                result = 31 * result + (this.expression != null ? this.expression.hashCode() : 0);
                result = 31 * result + (this.match != null ? this.match.hashCode() : 0);
                result = 31 * result + (this.mode != null ? this.mode.hashCode() : 0);
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.target != null ? this.target.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.ThresholdProperty")
    @software.amazon.jsii.Jsii.Proxy(ThresholdProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ThresholdProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDistinctManagedRules() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getManagedRulesBlocked() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRequest() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResponseStatus() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTraffic() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ThresholdProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ThresholdProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ThresholdProperty> {
            java.lang.Object distinctManagedRules;
            java.lang.Object managedRulesBlocked;
            java.lang.Object request;
            java.lang.Object responseStatus;
            java.lang.Object traffic;

            /**
             * Sets the value of {@link ThresholdProperty#getDistinctManagedRules}
             * @param distinctManagedRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder distinctManagedRules(java.lang.Number distinctManagedRules) {
                this.distinctManagedRules = distinctManagedRules;
                return this;
            }

            /**
             * Sets the value of {@link ThresholdProperty#getDistinctManagedRules}
             * @param distinctManagedRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder distinctManagedRules(com.aliyun.ros.cdk.core.IResolvable distinctManagedRules) {
                this.distinctManagedRules = distinctManagedRules;
                return this;
            }

            /**
             * Sets the value of {@link ThresholdProperty#getManagedRulesBlocked}
             * @param managedRulesBlocked the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedRulesBlocked(java.lang.Number managedRulesBlocked) {
                this.managedRulesBlocked = managedRulesBlocked;
                return this;
            }

            /**
             * Sets the value of {@link ThresholdProperty#getManagedRulesBlocked}
             * @param managedRulesBlocked the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedRulesBlocked(com.aliyun.ros.cdk.core.IResolvable managedRulesBlocked) {
                this.managedRulesBlocked = managedRulesBlocked;
                return this;
            }

            /**
             * Sets the value of {@link ThresholdProperty#getRequest}
             * @param request the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder request(java.lang.Number request) {
                this.request = request;
                return this;
            }

            /**
             * Sets the value of {@link ThresholdProperty#getRequest}
             * @param request the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder request(com.aliyun.ros.cdk.core.IResolvable request) {
                this.request = request;
                return this;
            }

            /**
             * Sets the value of {@link ThresholdProperty#getResponseStatus}
             * @param responseStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseStatus(com.aliyun.ros.cdk.core.IResolvable responseStatus) {
                this.responseStatus = responseStatus;
                return this;
            }

            /**
             * Sets the value of {@link ThresholdProperty#getResponseStatus}
             * @param responseStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseStatus(com.aliyun.ros.cdk.esa.RosWafRule.ResponseStatusProperty responseStatus) {
                this.responseStatus = responseStatus;
                return this;
            }

            /**
             * Sets the value of {@link ThresholdProperty#getTraffic}
             * @param traffic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder traffic(java.lang.String traffic) {
                this.traffic = traffic;
                return this;
            }

            /**
             * Sets the value of {@link ThresholdProperty#getTraffic}
             * @param traffic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder traffic(com.aliyun.ros.cdk.core.IResolvable traffic) {
                this.traffic = traffic;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ThresholdProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ThresholdProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ThresholdProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ThresholdProperty {
            private final java.lang.Object distinctManagedRules;
            private final java.lang.Object managedRulesBlocked;
            private final java.lang.Object request;
            private final java.lang.Object responseStatus;
            private final java.lang.Object traffic;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.distinctManagedRules = software.amazon.jsii.Kernel.get(this, "distinctManagedRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.managedRulesBlocked = software.amazon.jsii.Kernel.get(this, "managedRulesBlocked", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.request = software.amazon.jsii.Kernel.get(this, "request", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.responseStatus = software.amazon.jsii.Kernel.get(this, "responseStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.traffic = software.amazon.jsii.Kernel.get(this, "traffic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.distinctManagedRules = builder.distinctManagedRules;
                this.managedRulesBlocked = builder.managedRulesBlocked;
                this.request = builder.request;
                this.responseStatus = builder.responseStatus;
                this.traffic = builder.traffic;
            }

            @Override
            public final java.lang.Object getDistinctManagedRules() {
                return this.distinctManagedRules;
            }

            @Override
            public final java.lang.Object getManagedRulesBlocked() {
                return this.managedRulesBlocked;
            }

            @Override
            public final java.lang.Object getRequest() {
                return this.request;
            }

            @Override
            public final java.lang.Object getResponseStatus() {
                return this.responseStatus;
            }

            @Override
            public final java.lang.Object getTraffic() {
                return this.traffic;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDistinctManagedRules() != null) {
                    data.set("distinctManagedRules", om.valueToTree(this.getDistinctManagedRules()));
                }
                if (this.getManagedRulesBlocked() != null) {
                    data.set("managedRulesBlocked", om.valueToTree(this.getManagedRulesBlocked()));
                }
                if (this.getRequest() != null) {
                    data.set("request", om.valueToTree(this.getRequest()));
                }
                if (this.getResponseStatus() != null) {
                    data.set("responseStatus", om.valueToTree(this.getResponseStatus()));
                }
                if (this.getTraffic() != null) {
                    data.set("traffic", om.valueToTree(this.getTraffic()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.ThresholdProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ThresholdProperty.Jsii$Proxy that = (ThresholdProperty.Jsii$Proxy) o;

                if (this.distinctManagedRules != null ? !this.distinctManagedRules.equals(that.distinctManagedRules) : that.distinctManagedRules != null) return false;
                if (this.managedRulesBlocked != null ? !this.managedRulesBlocked.equals(that.managedRulesBlocked) : that.managedRulesBlocked != null) return false;
                if (this.request != null ? !this.request.equals(that.request) : that.request != null) return false;
                if (this.responseStatus != null ? !this.responseStatus.equals(that.responseStatus) : that.responseStatus != null) return false;
                return this.traffic != null ? this.traffic.equals(that.traffic) : that.traffic == null;
            }

            @Override
            public final int hashCode() {
                int result = this.distinctManagedRules != null ? this.distinctManagedRules.hashCode() : 0;
                result = 31 * result + (this.managedRulesBlocked != null ? this.managedRulesBlocked.hashCode() : 0);
                result = 31 * result + (this.request != null ? this.request.hashCode() : 0);
                result = 31 * result + (this.responseStatus != null ? this.responseStatus.hashCode() : 0);
                result = 31 * result + (this.traffic != null ? this.traffic.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.TimerProperty")
    @software.amazon.jsii.Jsii.Proxy(TimerProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TimerProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriods() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScopes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWeeklyPeriods() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getZone() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TimerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TimerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TimerProperty> {
            java.lang.Object periods;
            java.lang.Object scopes;
            java.lang.Object weeklyPeriods;
            java.lang.Object zone;

            /**
             * Sets the value of {@link TimerProperty#getPeriods}
             * @param periods the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periods(com.aliyun.ros.cdk.core.IResolvable periods) {
                this.periods = periods;
                return this;
            }

            /**
             * Sets the value of {@link TimerProperty#getPeriods}
             * @param periods the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periods(java.util.List<? extends java.lang.Object> periods) {
                this.periods = periods;
                return this;
            }

            /**
             * Sets the value of {@link TimerProperty#getScopes}
             * @param scopes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scopes(java.lang.String scopes) {
                this.scopes = scopes;
                return this;
            }

            /**
             * Sets the value of {@link TimerProperty#getScopes}
             * @param scopes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scopes(com.aliyun.ros.cdk.core.IResolvable scopes) {
                this.scopes = scopes;
                return this;
            }

            /**
             * Sets the value of {@link TimerProperty#getWeeklyPeriods}
             * @param weeklyPeriods the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weeklyPeriods(com.aliyun.ros.cdk.core.IResolvable weeklyPeriods) {
                this.weeklyPeriods = weeklyPeriods;
                return this;
            }

            /**
             * Sets the value of {@link TimerProperty#getWeeklyPeriods}
             * @param weeklyPeriods the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weeklyPeriods(java.util.List<? extends java.lang.Object> weeklyPeriods) {
                this.weeklyPeriods = weeklyPeriods;
                return this;
            }

            /**
             * Sets the value of {@link TimerProperty#getZone}
             * @param zone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zone(java.lang.Number zone) {
                this.zone = zone;
                return this;
            }

            /**
             * Sets the value of {@link TimerProperty#getZone}
             * @param zone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zone(com.aliyun.ros.cdk.core.IResolvable zone) {
                this.zone = zone;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TimerProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TimerProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TimerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TimerProperty {
            private final java.lang.Object periods;
            private final java.lang.Object scopes;
            private final java.lang.Object weeklyPeriods;
            private final java.lang.Object zone;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.periods = software.amazon.jsii.Kernel.get(this, "periods", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scopes = software.amazon.jsii.Kernel.get(this, "scopes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.weeklyPeriods = software.amazon.jsii.Kernel.get(this, "weeklyPeriods", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zone = software.amazon.jsii.Kernel.get(this, "zone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.periods = builder.periods;
                this.scopes = builder.scopes;
                this.weeklyPeriods = builder.weeklyPeriods;
                this.zone = builder.zone;
            }

            @Override
            public final java.lang.Object getPeriods() {
                return this.periods;
            }

            @Override
            public final java.lang.Object getScopes() {
                return this.scopes;
            }

            @Override
            public final java.lang.Object getWeeklyPeriods() {
                return this.weeklyPeriods;
            }

            @Override
            public final java.lang.Object getZone() {
                return this.zone;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getPeriods() != null) {
                    data.set("periods", om.valueToTree(this.getPeriods()));
                }
                if (this.getScopes() != null) {
                    data.set("scopes", om.valueToTree(this.getScopes()));
                }
                if (this.getWeeklyPeriods() != null) {
                    data.set("weeklyPeriods", om.valueToTree(this.getWeeklyPeriods()));
                }
                if (this.getZone() != null) {
                    data.set("zone", om.valueToTree(this.getZone()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.TimerProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TimerProperty.Jsii$Proxy that = (TimerProperty.Jsii$Proxy) o;

                if (this.periods != null ? !this.periods.equals(that.periods) : that.periods != null) return false;
                if (this.scopes != null ? !this.scopes.equals(that.scopes) : that.scopes != null) return false;
                if (this.weeklyPeriods != null ? !this.weeklyPeriods.equals(that.weeklyPeriods) : that.weeklyPeriods != null) return false;
                return this.zone != null ? this.zone.equals(that.zone) : that.zone == null;
            }

            @Override
            public final int hashCode() {
                int result = this.periods != null ? this.periods.hashCode() : 0;
                result = 31 * result + (this.scopes != null ? this.scopes.hashCode() : 0);
                result = 31 * result + (this.weeklyPeriods != null ? this.weeklyPeriods.hashCode() : 0);
                result = 31 * result + (this.zone != null ? this.zone.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosWafRule.WeeklyPeriodsProperty")
    @software.amazon.jsii.Jsii.Proxy(WeeklyPeriodsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface WeeklyPeriodsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDailyPeriods() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDays() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link WeeklyPeriodsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link WeeklyPeriodsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<WeeklyPeriodsProperty> {
            java.lang.Object dailyPeriods;
            java.lang.Object days;

            /**
             * Sets the value of {@link WeeklyPeriodsProperty#getDailyPeriods}
             * @param dailyPeriods the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dailyPeriods(com.aliyun.ros.cdk.core.IResolvable dailyPeriods) {
                this.dailyPeriods = dailyPeriods;
                return this;
            }

            /**
             * Sets the value of {@link WeeklyPeriodsProperty#getDailyPeriods}
             * @param dailyPeriods the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dailyPeriods(java.util.List<? extends java.lang.Object> dailyPeriods) {
                this.dailyPeriods = dailyPeriods;
                return this;
            }

            /**
             * Sets the value of {@link WeeklyPeriodsProperty#getDays}
             * @param days the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder days(java.lang.String days) {
                this.days = days;
                return this;
            }

            /**
             * Sets the value of {@link WeeklyPeriodsProperty#getDays}
             * @param days the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder days(com.aliyun.ros.cdk.core.IResolvable days) {
                this.days = days;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link WeeklyPeriodsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public WeeklyPeriodsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link WeeklyPeriodsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WeeklyPeriodsProperty {
            private final java.lang.Object dailyPeriods;
            private final java.lang.Object days;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dailyPeriods = software.amazon.jsii.Kernel.get(this, "dailyPeriods", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.days = software.amazon.jsii.Kernel.get(this, "days", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dailyPeriods = builder.dailyPeriods;
                this.days = builder.days;
            }

            @Override
            public final java.lang.Object getDailyPeriods() {
                return this.dailyPeriods;
            }

            @Override
            public final java.lang.Object getDays() {
                return this.days;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDailyPeriods() != null) {
                    data.set("dailyPeriods", om.valueToTree(this.getDailyPeriods()));
                }
                if (this.getDays() != null) {
                    data.set("days", om.valueToTree(this.getDays()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosWafRule.WeeklyPeriodsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                WeeklyPeriodsProperty.Jsii$Proxy that = (WeeklyPeriodsProperty.Jsii$Proxy) o;

                if (this.dailyPeriods != null ? !this.dailyPeriods.equals(that.dailyPeriods) : that.dailyPeriods != null) return false;
                return this.days != null ? this.days.equals(that.days) : that.days == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dailyPeriods != null ? this.dailyPeriods.hashCode() : 0;
                result = 31 * result + (this.days != null ? this.days.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.RosWafRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.RosWafRule> {
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
        private final com.aliyun.ros.cdk.esa.RosWafRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RosWafRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param phase This parameter is required.
         */
        public Builder phase(final java.lang.String phase) {
            this.props.phase(phase);
            return this;
        }
        /**
         * @return {@code this}
         * @param phase This parameter is required.
         */
        public Builder phase(final com.aliyun.ros.cdk.core.IResolvable phase) {
            this.props.phase(phase);
            return this;
        }

        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * @return {@code this}
         * @param config This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.core.IResolvable config) {
            this.props.config(config);
            return this;
        }
        /**
         * @return {@code this}
         * @param config This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.esa.RosWafRule.ConfigProperty config) {
            this.props.config(config);
            return this;
        }

        /**
         * @return {@code this}
         * @param rulesetId This parameter is required.
         */
        public Builder rulesetId(final java.lang.Number rulesetId) {
            this.props.rulesetId(rulesetId);
            return this;
        }
        /**
         * @return {@code this}
         * @param rulesetId This parameter is required.
         */
        public Builder rulesetId(final com.aliyun.ros.cdk.core.IResolvable rulesetId) {
            this.props.rulesetId(rulesetId);
            return this;
        }

        /**
         * @return {@code this}
         * @param shared This parameter is required.
         */
        public Builder shared(final com.aliyun.ros.cdk.core.IResolvable shared) {
            this.props.shared(shared);
            return this;
        }
        /**
         * @return {@code this}
         * @param shared This parameter is required.
         */
        public Builder shared(final com.aliyun.ros.cdk.esa.RosWafRule.SharedProperty shared) {
            this.props.shared(shared);
            return this;
        }

        /**
         * @return {@code this}
         * @param siteVersion This parameter is required.
         */
        public Builder siteVersion(final java.lang.Number siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param siteVersion This parameter is required.
         */
        public Builder siteVersion(final com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.RosWafRule}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.RosWafRule build() {
            return new com.aliyun.ros.cdk.esa.RosWafRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
