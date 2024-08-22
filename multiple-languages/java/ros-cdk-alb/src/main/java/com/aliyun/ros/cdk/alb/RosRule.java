package com.aliyun.ros.cdk.alb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ALB::Rule</code>ALIYUN::Config::Rule is used to create a forwarding rule.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:17.556Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule")
public class RosRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.alb.RosRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.RosRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPriority() {
        return software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleActions() {
        return software.amazon.jsii.Kernel.get(this, "ruleActions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleActions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleActions", java.util.Objects.requireNonNull(value, "ruleActions is required"));
    }

    /**
     */
    public void setRuleActions(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.alb.RosRule.RuleActionsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.alb.RosRule.RuleActionsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "ruleActions", java.util.Objects.requireNonNull(value, "ruleActions is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleConditions() {
        return software.amazon.jsii.Kernel.get(this, "ruleConditions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleConditions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleConditions", java.util.Objects.requireNonNull(value, "ruleConditions is required"));
    }

    /**
     */
    public void setRuleConditions(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.alb.RosRule.RuleConditionsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.alb.RosRule.RuleConditionsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "ruleConditions", java.util.Objects.requireNonNull(value, "ruleConditions is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleName() {
        return software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", java.util.Objects.requireNonNull(value, "ruleName is required"));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", java.util.Objects.requireNonNull(value, "ruleName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDirection() {
        return software.amazon.jsii.Kernel.get(this, "direction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDirection(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "direction", value);
    }

    /**
     */
    public void setDirection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "direction", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.CookieConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(CookieConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CookieConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CookieConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CookieConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CookieConfigProperty> {
            java.lang.Object values;

            /**
             * Sets the value of {@link CookieConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link CookieConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CookieConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CookieConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CookieConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CookieConfigProperty {
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.CookieConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CookieConfigProperty.Jsii$Proxy that = (CookieConfigProperty.Jsii$Proxy) o;

                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.values != null ? this.values.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.CorsConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(CorsConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CorsConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllowCredentials() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllowHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllowMethods() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllowOrigin() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExposeHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxAge() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CorsConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CorsConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CorsConfigProperty> {
            java.lang.Object allowCredentials;
            java.lang.Object allowHeaders;
            java.lang.Object allowMethods;
            java.lang.Object allowOrigin;
            java.lang.Object exposeHeaders;
            java.lang.Object maxAge;

            /**
             * Sets the value of {@link CorsConfigProperty#getAllowCredentials}
             * @param allowCredentials the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowCredentials(java.lang.String allowCredentials) {
                this.allowCredentials = allowCredentials;
                return this;
            }

            /**
             * Sets the value of {@link CorsConfigProperty#getAllowCredentials}
             * @param allowCredentials the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowCredentials(com.aliyun.ros.cdk.core.IResolvable allowCredentials) {
                this.allowCredentials = allowCredentials;
                return this;
            }

            /**
             * Sets the value of {@link CorsConfigProperty#getAllowHeaders}
             * @param allowHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowHeaders(com.aliyun.ros.cdk.core.IResolvable allowHeaders) {
                this.allowHeaders = allowHeaders;
                return this;
            }

            /**
             * Sets the value of {@link CorsConfigProperty#getAllowHeaders}
             * @param allowHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowHeaders(java.util.List<? extends java.lang.Object> allowHeaders) {
                this.allowHeaders = allowHeaders;
                return this;
            }

            /**
             * Sets the value of {@link CorsConfigProperty#getAllowMethods}
             * @param allowMethods the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowMethods(com.aliyun.ros.cdk.core.IResolvable allowMethods) {
                this.allowMethods = allowMethods;
                return this;
            }

            /**
             * Sets the value of {@link CorsConfigProperty#getAllowMethods}
             * @param allowMethods the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowMethods(java.util.List<? extends java.lang.Object> allowMethods) {
                this.allowMethods = allowMethods;
                return this;
            }

            /**
             * Sets the value of {@link CorsConfigProperty#getAllowOrigin}
             * @param allowOrigin the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowOrigin(com.aliyun.ros.cdk.core.IResolvable allowOrigin) {
                this.allowOrigin = allowOrigin;
                return this;
            }

            /**
             * Sets the value of {@link CorsConfigProperty#getAllowOrigin}
             * @param allowOrigin the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowOrigin(java.util.List<? extends java.lang.Object> allowOrigin) {
                this.allowOrigin = allowOrigin;
                return this;
            }

            /**
             * Sets the value of {@link CorsConfigProperty#getExposeHeaders}
             * @param exposeHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exposeHeaders(com.aliyun.ros.cdk.core.IResolvable exposeHeaders) {
                this.exposeHeaders = exposeHeaders;
                return this;
            }

            /**
             * Sets the value of {@link CorsConfigProperty#getExposeHeaders}
             * @param exposeHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exposeHeaders(java.util.List<? extends java.lang.Object> exposeHeaders) {
                this.exposeHeaders = exposeHeaders;
                return this;
            }

            /**
             * Sets the value of {@link CorsConfigProperty#getMaxAge}
             * @param maxAge the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxAge(java.lang.Number maxAge) {
                this.maxAge = maxAge;
                return this;
            }

            /**
             * Sets the value of {@link CorsConfigProperty#getMaxAge}
             * @param maxAge the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxAge(com.aliyun.ros.cdk.core.IResolvable maxAge) {
                this.maxAge = maxAge;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CorsConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CorsConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CorsConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CorsConfigProperty {
            private final java.lang.Object allowCredentials;
            private final java.lang.Object allowHeaders;
            private final java.lang.Object allowMethods;
            private final java.lang.Object allowOrigin;
            private final java.lang.Object exposeHeaders;
            private final java.lang.Object maxAge;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.allowCredentials = software.amazon.jsii.Kernel.get(this, "allowCredentials", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.allowHeaders = software.amazon.jsii.Kernel.get(this, "allowHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.allowMethods = software.amazon.jsii.Kernel.get(this, "allowMethods", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.allowOrigin = software.amazon.jsii.Kernel.get(this, "allowOrigin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.exposeHeaders = software.amazon.jsii.Kernel.get(this, "exposeHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxAge = software.amazon.jsii.Kernel.get(this, "maxAge", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.allowCredentials = builder.allowCredentials;
                this.allowHeaders = builder.allowHeaders;
                this.allowMethods = builder.allowMethods;
                this.allowOrigin = builder.allowOrigin;
                this.exposeHeaders = builder.exposeHeaders;
                this.maxAge = builder.maxAge;
            }

            @Override
            public final java.lang.Object getAllowCredentials() {
                return this.allowCredentials;
            }

            @Override
            public final java.lang.Object getAllowHeaders() {
                return this.allowHeaders;
            }

            @Override
            public final java.lang.Object getAllowMethods() {
                return this.allowMethods;
            }

            @Override
            public final java.lang.Object getAllowOrigin() {
                return this.allowOrigin;
            }

            @Override
            public final java.lang.Object getExposeHeaders() {
                return this.exposeHeaders;
            }

            @Override
            public final java.lang.Object getMaxAge() {
                return this.maxAge;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAllowCredentials() != null) {
                    data.set("allowCredentials", om.valueToTree(this.getAllowCredentials()));
                }
                if (this.getAllowHeaders() != null) {
                    data.set("allowHeaders", om.valueToTree(this.getAllowHeaders()));
                }
                if (this.getAllowMethods() != null) {
                    data.set("allowMethods", om.valueToTree(this.getAllowMethods()));
                }
                if (this.getAllowOrigin() != null) {
                    data.set("allowOrigin", om.valueToTree(this.getAllowOrigin()));
                }
                if (this.getExposeHeaders() != null) {
                    data.set("exposeHeaders", om.valueToTree(this.getExposeHeaders()));
                }
                if (this.getMaxAge() != null) {
                    data.set("maxAge", om.valueToTree(this.getMaxAge()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.CorsConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CorsConfigProperty.Jsii$Proxy that = (CorsConfigProperty.Jsii$Proxy) o;

                if (this.allowCredentials != null ? !this.allowCredentials.equals(that.allowCredentials) : that.allowCredentials != null) return false;
                if (this.allowHeaders != null ? !this.allowHeaders.equals(that.allowHeaders) : that.allowHeaders != null) return false;
                if (this.allowMethods != null ? !this.allowMethods.equals(that.allowMethods) : that.allowMethods != null) return false;
                if (this.allowOrigin != null ? !this.allowOrigin.equals(that.allowOrigin) : that.allowOrigin != null) return false;
                if (this.exposeHeaders != null ? !this.exposeHeaders.equals(that.exposeHeaders) : that.exposeHeaders != null) return false;
                return this.maxAge != null ? this.maxAge.equals(that.maxAge) : that.maxAge == null;
            }

            @Override
            public final int hashCode() {
                int result = this.allowCredentials != null ? this.allowCredentials.hashCode() : 0;
                result = 31 * result + (this.allowHeaders != null ? this.allowHeaders.hashCode() : 0);
                result = 31 * result + (this.allowMethods != null ? this.allowMethods.hashCode() : 0);
                result = 31 * result + (this.allowOrigin != null ? this.allowOrigin.hashCode() : 0);
                result = 31 * result + (this.exposeHeaders != null ? this.exposeHeaders.hashCode() : 0);
                result = 31 * result + (this.maxAge != null ? this.maxAge.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.FixedResponseConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(FixedResponseConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FixedResponseConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContent() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContentType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpCode() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link FixedResponseConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FixedResponseConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FixedResponseConfigProperty> {
            java.lang.Object content;
            java.lang.Object contentType;
            java.lang.Object httpCode;

            /**
             * Sets the value of {@link FixedResponseConfigProperty#getContent}
             * @param content the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder content(java.lang.String content) {
                this.content = content;
                return this;
            }

            /**
             * Sets the value of {@link FixedResponseConfigProperty#getContent}
             * @param content the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
                this.content = content;
                return this;
            }

            /**
             * Sets the value of {@link FixedResponseConfigProperty#getContentType}
             * @param contentType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentType(java.lang.String contentType) {
                this.contentType = contentType;
                return this;
            }

            /**
             * Sets the value of {@link FixedResponseConfigProperty#getContentType}
             * @param contentType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentType(com.aliyun.ros.cdk.core.IResolvable contentType) {
                this.contentType = contentType;
                return this;
            }

            /**
             * Sets the value of {@link FixedResponseConfigProperty#getHttpCode}
             * @param httpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpCode(java.lang.String httpCode) {
                this.httpCode = httpCode;
                return this;
            }

            /**
             * Sets the value of {@link FixedResponseConfigProperty#getHttpCode}
             * @param httpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpCode(com.aliyun.ros.cdk.core.IResolvable httpCode) {
                this.httpCode = httpCode;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FixedResponseConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FixedResponseConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link FixedResponseConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FixedResponseConfigProperty {
            private final java.lang.Object content;
            private final java.lang.Object contentType;
            private final java.lang.Object httpCode;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.contentType = software.amazon.jsii.Kernel.get(this, "contentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpCode = software.amazon.jsii.Kernel.get(this, "httpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.content = builder.content;
                this.contentType = builder.contentType;
                this.httpCode = builder.httpCode;
            }

            @Override
            public final java.lang.Object getContent() {
                return this.content;
            }

            @Override
            public final java.lang.Object getContentType() {
                return this.contentType;
            }

            @Override
            public final java.lang.Object getHttpCode() {
                return this.httpCode;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getContent() != null) {
                    data.set("content", om.valueToTree(this.getContent()));
                }
                if (this.getContentType() != null) {
                    data.set("contentType", om.valueToTree(this.getContentType()));
                }
                if (this.getHttpCode() != null) {
                    data.set("httpCode", om.valueToTree(this.getHttpCode()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.FixedResponseConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FixedResponseConfigProperty.Jsii$Proxy that = (FixedResponseConfigProperty.Jsii$Proxy) o;

                if (this.content != null ? !this.content.equals(that.content) : that.content != null) return false;
                if (this.contentType != null ? !this.contentType.equals(that.contentType) : that.contentType != null) return false;
                return this.httpCode != null ? this.httpCode.equals(that.httpCode) : that.httpCode == null;
            }

            @Override
            public final int hashCode() {
                int result = this.content != null ? this.content.hashCode() : 0;
                result = 31 * result + (this.contentType != null ? this.contentType.hashCode() : 0);
                result = 31 * result + (this.httpCode != null ? this.httpCode.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.ForwardGroupConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ForwardGroupConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ForwardGroupConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServerGroupStickySession() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServerGroupTuples() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ForwardGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ForwardGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ForwardGroupConfigProperty> {
            java.lang.Object serverGroupStickySession;
            java.lang.Object serverGroupTuples;

            /**
             * Sets the value of {@link ForwardGroupConfigProperty#getServerGroupStickySession}
             * @param serverGroupStickySession the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupStickySession(com.aliyun.ros.cdk.core.IResolvable serverGroupStickySession) {
                this.serverGroupStickySession = serverGroupStickySession;
                return this;
            }

            /**
             * Sets the value of {@link ForwardGroupConfigProperty#getServerGroupStickySession}
             * @param serverGroupStickySession the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupStickySession(com.aliyun.ros.cdk.alb.RosRule.ServerGroupStickySessionProperty serverGroupStickySession) {
                this.serverGroupStickySession = serverGroupStickySession;
                return this;
            }

            /**
             * Sets the value of {@link ForwardGroupConfigProperty#getServerGroupTuples}
             * @param serverGroupTuples the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupTuples(com.aliyun.ros.cdk.core.IResolvable serverGroupTuples) {
                this.serverGroupTuples = serverGroupTuples;
                return this;
            }

            /**
             * Sets the value of {@link ForwardGroupConfigProperty#getServerGroupTuples}
             * @param serverGroupTuples the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupTuples(java.util.List<? extends java.lang.Object> serverGroupTuples) {
                this.serverGroupTuples = serverGroupTuples;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ForwardGroupConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ForwardGroupConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ForwardGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ForwardGroupConfigProperty {
            private final java.lang.Object serverGroupStickySession;
            private final java.lang.Object serverGroupTuples;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.serverGroupStickySession = software.amazon.jsii.Kernel.get(this, "serverGroupStickySession", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serverGroupTuples = software.amazon.jsii.Kernel.get(this, "serverGroupTuples", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.serverGroupStickySession = builder.serverGroupStickySession;
                this.serverGroupTuples = builder.serverGroupTuples;
            }

            @Override
            public final java.lang.Object getServerGroupStickySession() {
                return this.serverGroupStickySession;
            }

            @Override
            public final java.lang.Object getServerGroupTuples() {
                return this.serverGroupTuples;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getServerGroupStickySession() != null) {
                    data.set("serverGroupStickySession", om.valueToTree(this.getServerGroupStickySession()));
                }
                if (this.getServerGroupTuples() != null) {
                    data.set("serverGroupTuples", om.valueToTree(this.getServerGroupTuples()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.ForwardGroupConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ForwardGroupConfigProperty.Jsii$Proxy that = (ForwardGroupConfigProperty.Jsii$Proxy) o;

                if (this.serverGroupStickySession != null ? !this.serverGroupStickySession.equals(that.serverGroupStickySession) : that.serverGroupStickySession != null) return false;
                return this.serverGroupTuples != null ? this.serverGroupTuples.equals(that.serverGroupTuples) : that.serverGroupTuples == null;
            }

            @Override
            public final int hashCode() {
                int result = this.serverGroupStickySession != null ? this.serverGroupStickySession.hashCode() : 0;
                result = 31 * result + (this.serverGroupTuples != null ? this.serverGroupTuples.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.HeaderConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(HeaderConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HeaderConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HeaderConfigProperty> {
            java.lang.Object key;
            java.lang.Object values;

            /**
             * Sets the value of {@link HeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link HeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link HeaderConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link HeaderConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HeaderConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HeaderConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HeaderConfigProperty {
            private final java.lang.Object key;
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.HeaderConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HeaderConfigProperty.Jsii$Proxy that = (HeaderConfigProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.values != null ? this.values.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.HostConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(HostConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HostConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HostConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HostConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HostConfigProperty> {
            java.lang.Object values;

            /**
             * Sets the value of {@link HostConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link HostConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HostConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HostConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HostConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HostConfigProperty {
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.HostConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HostConfigProperty.Jsii$Proxy that = (HostConfigProperty.Jsii$Proxy) o;

                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.values != null ? this.values.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.InsertHeaderConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(InsertHeaderConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InsertHeaderConfigProperty extends software.amazon.jsii.JsiiSerializable {

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
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValueType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link InsertHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InsertHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InsertHeaderConfigProperty> {
            java.lang.Object key;
            java.lang.Object value;
            java.lang.Object valueType;

            /**
             * Sets the value of {@link InsertHeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link InsertHeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link InsertHeaderConfigProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link InsertHeaderConfigProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link InsertHeaderConfigProperty#getValueType}
             * @param valueType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder valueType(java.lang.String valueType) {
                this.valueType = valueType;
                return this;
            }

            /**
             * Sets the value of {@link InsertHeaderConfigProperty#getValueType}
             * @param valueType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder valueType(com.aliyun.ros.cdk.core.IResolvable valueType) {
                this.valueType = valueType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InsertHeaderConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InsertHeaderConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InsertHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InsertHeaderConfigProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;
            private final java.lang.Object valueType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.valueType = software.amazon.jsii.Kernel.get(this, "valueType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.value = builder.value;
                this.valueType = builder.valueType;
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
            public final java.lang.Object getValueType() {
                return this.valueType;
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
                if (this.getValueType() != null) {
                    data.set("valueType", om.valueToTree(this.getValueType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.InsertHeaderConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InsertHeaderConfigProperty.Jsii$Proxy that = (InsertHeaderConfigProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                if (this.value != null ? !this.value.equals(that.value) : that.value != null) return false;
                return this.valueType != null ? this.valueType.equals(that.valueType) : that.valueType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                result = 31 * result + (this.valueType != null ? this.valueType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.MethodConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(MethodConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MethodConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MethodConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MethodConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MethodConfigProperty> {
            java.lang.Object values;

            /**
             * Sets the value of {@link MethodConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link MethodConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MethodConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MethodConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MethodConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MethodConfigProperty {
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.MethodConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MethodConfigProperty.Jsii$Proxy that = (MethodConfigProperty.Jsii$Proxy) o;

                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.values != null ? this.values.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.MirrorGroupConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(MirrorGroupConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MirrorGroupConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServerGroupTuples();

        /**
         * @return a {@link Builder} of {@link MirrorGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MirrorGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MirrorGroupConfigProperty> {
            java.lang.Object serverGroupTuples;

            /**
             * Sets the value of {@link MirrorGroupConfigProperty#getServerGroupTuples}
             * @param serverGroupTuples the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupTuples(com.aliyun.ros.cdk.core.IResolvable serverGroupTuples) {
                this.serverGroupTuples = serverGroupTuples;
                return this;
            }

            /**
             * Sets the value of {@link MirrorGroupConfigProperty#getServerGroupTuples}
             * @param serverGroupTuples the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupTuples(java.util.List<? extends java.lang.Object> serverGroupTuples) {
                this.serverGroupTuples = serverGroupTuples;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MirrorGroupConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MirrorGroupConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MirrorGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MirrorGroupConfigProperty {
            private final java.lang.Object serverGroupTuples;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.serverGroupTuples = software.amazon.jsii.Kernel.get(this, "serverGroupTuples", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.serverGroupTuples = java.util.Objects.requireNonNull(builder.serverGroupTuples, "serverGroupTuples is required");
            }

            @Override
            public final java.lang.Object getServerGroupTuples() {
                return this.serverGroupTuples;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("serverGroupTuples", om.valueToTree(this.getServerGroupTuples()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.MirrorGroupConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MirrorGroupConfigProperty.Jsii$Proxy that = (MirrorGroupConfigProperty.Jsii$Proxy) o;

                return this.serverGroupTuples.equals(that.serverGroupTuples);
            }

            @Override
            public final int hashCode() {
                int result = this.serverGroupTuples.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.MirrorGroupConfigServerGroupTuplesProperty")
    @software.amazon.jsii.Jsii.Proxy(MirrorGroupConfigServerGroupTuplesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MirrorGroupConfigServerGroupTuplesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServerGroupId();

        /**
         * @return a {@link Builder} of {@link MirrorGroupConfigServerGroupTuplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MirrorGroupConfigServerGroupTuplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MirrorGroupConfigServerGroupTuplesProperty> {
            java.lang.Object serverGroupId;

            /**
             * Sets the value of {@link MirrorGroupConfigServerGroupTuplesProperty#getServerGroupId}
             * @param serverGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupId(java.lang.String serverGroupId) {
                this.serverGroupId = serverGroupId;
                return this;
            }

            /**
             * Sets the value of {@link MirrorGroupConfigServerGroupTuplesProperty#getServerGroupId}
             * @param serverGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupId(com.aliyun.ros.cdk.core.IResolvable serverGroupId) {
                this.serverGroupId = serverGroupId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MirrorGroupConfigServerGroupTuplesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MirrorGroupConfigServerGroupTuplesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MirrorGroupConfigServerGroupTuplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MirrorGroupConfigServerGroupTuplesProperty {
            private final java.lang.Object serverGroupId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.serverGroupId = software.amazon.jsii.Kernel.get(this, "serverGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.serverGroupId = java.util.Objects.requireNonNull(builder.serverGroupId, "serverGroupId is required");
            }

            @Override
            public final java.lang.Object getServerGroupId() {
                return this.serverGroupId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("serverGroupId", om.valueToTree(this.getServerGroupId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.MirrorGroupConfigServerGroupTuplesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MirrorGroupConfigServerGroupTuplesProperty.Jsii$Proxy that = (MirrorGroupConfigServerGroupTuplesProperty.Jsii$Proxy) o;

                return this.serverGroupId.equals(that.serverGroupId);
            }

            @Override
            public final int hashCode() {
                int result = this.serverGroupId.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.PathConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(PathConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PathConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PathConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PathConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PathConfigProperty> {
            java.lang.Object values;

            /**
             * Sets the value of {@link PathConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link PathConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PathConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PathConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PathConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PathConfigProperty {
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.PathConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PathConfigProperty.Jsii$Proxy that = (PathConfigProperty.Jsii$Proxy) o;

                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.values != null ? this.values.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.QueryStringConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(QueryStringConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QueryStringConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link QueryStringConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QueryStringConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QueryStringConfigProperty> {
            java.lang.Object values;

            /**
             * Sets the value of {@link QueryStringConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link QueryStringConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link QueryStringConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QueryStringConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QueryStringConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueryStringConfigProperty {
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.QueryStringConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QueryStringConfigProperty.Jsii$Proxy that = (QueryStringConfigProperty.Jsii$Proxy) o;

                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.values != null ? this.values.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.QueryStringConfigValuesProperty")
    @software.amazon.jsii.Jsii.Proxy(QueryStringConfigValuesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QueryStringConfigValuesProperty extends software.amazon.jsii.JsiiSerializable {

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
         * @return a {@link Builder} of {@link QueryStringConfigValuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QueryStringConfigValuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QueryStringConfigValuesProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link QueryStringConfigValuesProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link QueryStringConfigValuesProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link QueryStringConfigValuesProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link QueryStringConfigValuesProperty#getValue}
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
             * @return a new instance of {@link QueryStringConfigValuesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QueryStringConfigValuesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QueryStringConfigValuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueryStringConfigValuesProperty {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.QueryStringConfigValuesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QueryStringConfigValuesProperty.Jsii$Proxy that = (QueryStringConfigValuesProperty.Jsii$Proxy) o;

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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.RedirectConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(RedirectConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RedirectConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQuery() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RedirectConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RedirectConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RedirectConfigProperty> {
            java.lang.Object host;
            java.lang.Object httpCode;
            java.lang.Object path;
            java.lang.Object port;
            java.lang.Object protocol;
            java.lang.Object query;

            /**
             * Sets the value of {@link RedirectConfigProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getHttpCode}
             * @param httpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpCode(java.lang.Number httpCode) {
                this.httpCode = httpCode;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getHttpCode}
             * @param httpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpCode(com.aliyun.ros.cdk.core.IResolvable httpCode) {
                this.httpCode = httpCode;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getQuery}
             * @param query the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder query(java.lang.String query) {
                this.query = query;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getQuery}
             * @param query the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder query(com.aliyun.ros.cdk.core.IResolvable query) {
                this.query = query;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RedirectConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RedirectConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RedirectConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RedirectConfigProperty {
            private final java.lang.Object host;
            private final java.lang.Object httpCode;
            private final java.lang.Object path;
            private final java.lang.Object port;
            private final java.lang.Object protocol;
            private final java.lang.Object query;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpCode = software.amazon.jsii.Kernel.get(this, "httpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.query = software.amazon.jsii.Kernel.get(this, "query", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.host = builder.host;
                this.httpCode = builder.httpCode;
                this.path = builder.path;
                this.port = builder.port;
                this.protocol = builder.protocol;
                this.query = builder.query;
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
            }

            @Override
            public final java.lang.Object getHttpCode() {
                return this.httpCode;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            public final java.lang.Object getQuery() {
                return this.query;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getHost() != null) {
                    data.set("host", om.valueToTree(this.getHost()));
                }
                if (this.getHttpCode() != null) {
                    data.set("httpCode", om.valueToTree(this.getHttpCode()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getProtocol() != null) {
                    data.set("protocol", om.valueToTree(this.getProtocol()));
                }
                if (this.getQuery() != null) {
                    data.set("query", om.valueToTree(this.getQuery()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.RedirectConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RedirectConfigProperty.Jsii$Proxy that = (RedirectConfigProperty.Jsii$Proxy) o;

                if (this.host != null ? !this.host.equals(that.host) : that.host != null) return false;
                if (this.httpCode != null ? !this.httpCode.equals(that.httpCode) : that.httpCode != null) return false;
                if (this.path != null ? !this.path.equals(that.path) : that.path != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.protocol != null ? !this.protocol.equals(that.protocol) : that.protocol != null) return false;
                return this.query != null ? this.query.equals(that.query) : that.query == null;
            }

            @Override
            public final int hashCode() {
                int result = this.host != null ? this.host.hashCode() : 0;
                result = 31 * result + (this.httpCode != null ? this.httpCode.hashCode() : 0);
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
                result = 31 * result + (this.query != null ? this.query.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.RemoveHeaderConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(RemoveHeaderConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RemoveHeaderConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RemoveHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RemoveHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RemoveHeaderConfigProperty> {
            java.lang.Object key;

            /**
             * Sets the value of {@link RemoveHeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link RemoveHeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RemoveHeaderConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RemoveHeaderConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RemoveHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RemoveHeaderConfigProperty {
            private final java.lang.Object key;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.RemoveHeaderConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RemoveHeaderConfigProperty.Jsii$Proxy that = (RemoveHeaderConfigProperty.Jsii$Proxy) o;

                return this.key != null ? this.key.equals(that.key) : that.key == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.ResponseHeaderConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ResponseHeaderConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResponseHeaderConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ResponseHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResponseHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResponseHeaderConfigProperty> {
            java.lang.Object key;
            java.lang.Object values;

            /**
             * Sets the value of {@link ResponseHeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ResponseHeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ResponseHeaderConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link ResponseHeaderConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResponseHeaderConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResponseHeaderConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResponseHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResponseHeaderConfigProperty {
            private final java.lang.Object key;
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.ResponseHeaderConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResponseHeaderConfigProperty.Jsii$Proxy that = (ResponseHeaderConfigProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.values != null ? this.values.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.ResponseStatusCodeConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ResponseStatusCodeConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResponseStatusCodeConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ResponseStatusCodeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResponseStatusCodeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResponseStatusCodeConfigProperty> {
            java.lang.Object values;

            /**
             * Sets the value of {@link ResponseStatusCodeConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link ResponseStatusCodeConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResponseStatusCodeConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResponseStatusCodeConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResponseStatusCodeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResponseStatusCodeConfigProperty {
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.ResponseStatusCodeConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResponseStatusCodeConfigProperty.Jsii$Proxy that = (ResponseStatusCodeConfigProperty.Jsii$Proxy) o;

                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.values != null ? this.values.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.RewriteConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(RewriteConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RewriteConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQuery() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RewriteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RewriteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RewriteConfigProperty> {
            java.lang.Object host;
            java.lang.Object path;
            java.lang.Object query;

            /**
             * Sets the value of {@link RewriteConfigProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getQuery}
             * @param query the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder query(java.lang.String query) {
                this.query = query;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getQuery}
             * @param query the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder query(com.aliyun.ros.cdk.core.IResolvable query) {
                this.query = query;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RewriteConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RewriteConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RewriteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RewriteConfigProperty {
            private final java.lang.Object host;
            private final java.lang.Object path;
            private final java.lang.Object query;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.query = software.amazon.jsii.Kernel.get(this, "query", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.host = builder.host;
                this.path = builder.path;
                this.query = builder.query;
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            public final java.lang.Object getQuery() {
                return this.query;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getHost() != null) {
                    data.set("host", om.valueToTree(this.getHost()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }
                if (this.getQuery() != null) {
                    data.set("query", om.valueToTree(this.getQuery()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.RewriteConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RewriteConfigProperty.Jsii$Proxy that = (RewriteConfigProperty.Jsii$Proxy) o;

                if (this.host != null ? !this.host.equals(that.host) : that.host != null) return false;
                if (this.path != null ? !this.path.equals(that.path) : that.path != null) return false;
                return this.query != null ? this.query.equals(that.query) : that.query == null;
            }

            @Override
            public final int hashCode() {
                int result = this.host != null ? this.host.hashCode() : 0;
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                result = 31 * result + (this.query != null ? this.query.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.RuleActionsProperty")
    @software.amazon.jsii.Jsii.Proxy(RuleActionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RuleActionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getOrder();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCorsConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFixedResponseConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getForwardGroupConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInsertHeaderConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRedirectConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRemoveHeaderConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRewriteConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTrafficLimitConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTrafficMirrorConfig() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RuleActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RuleActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RuleActionsProperty> {
            java.lang.Object order;
            java.lang.Object type;
            java.lang.Object corsConfig;
            java.lang.Object fixedResponseConfig;
            java.lang.Object forwardGroupConfig;
            java.lang.Object insertHeaderConfig;
            java.lang.Object redirectConfig;
            java.lang.Object removeHeaderConfig;
            java.lang.Object rewriteConfig;
            java.lang.Object trafficLimitConfig;
            java.lang.Object trafficMirrorConfig;

            /**
             * Sets the value of {@link RuleActionsProperty#getOrder}
             * @param order the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder order(java.lang.Number order) {
                this.order = order;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getOrder}
             * @param order the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder order(com.aliyun.ros.cdk.core.IResolvable order) {
                this.order = order;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getCorsConfig}
             * @param corsConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder corsConfig(com.aliyun.ros.cdk.core.IResolvable corsConfig) {
                this.corsConfig = corsConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getCorsConfig}
             * @param corsConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder corsConfig(com.aliyun.ros.cdk.alb.RosRule.CorsConfigProperty corsConfig) {
                this.corsConfig = corsConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getFixedResponseConfig}
             * @param fixedResponseConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fixedResponseConfig(com.aliyun.ros.cdk.core.IResolvable fixedResponseConfig) {
                this.fixedResponseConfig = fixedResponseConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getFixedResponseConfig}
             * @param fixedResponseConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fixedResponseConfig(com.aliyun.ros.cdk.alb.RosRule.FixedResponseConfigProperty fixedResponseConfig) {
                this.fixedResponseConfig = fixedResponseConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getForwardGroupConfig}
             * @param forwardGroupConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder forwardGroupConfig(com.aliyun.ros.cdk.core.IResolvable forwardGroupConfig) {
                this.forwardGroupConfig = forwardGroupConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getForwardGroupConfig}
             * @param forwardGroupConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder forwardGroupConfig(com.aliyun.ros.cdk.alb.RosRule.ForwardGroupConfigProperty forwardGroupConfig) {
                this.forwardGroupConfig = forwardGroupConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getInsertHeaderConfig}
             * @param insertHeaderConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder insertHeaderConfig(com.aliyun.ros.cdk.core.IResolvable insertHeaderConfig) {
                this.insertHeaderConfig = insertHeaderConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getInsertHeaderConfig}
             * @param insertHeaderConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder insertHeaderConfig(com.aliyun.ros.cdk.alb.RosRule.InsertHeaderConfigProperty insertHeaderConfig) {
                this.insertHeaderConfig = insertHeaderConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getRedirectConfig}
             * @param redirectConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redirectConfig(com.aliyun.ros.cdk.core.IResolvable redirectConfig) {
                this.redirectConfig = redirectConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getRedirectConfig}
             * @param redirectConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redirectConfig(com.aliyun.ros.cdk.alb.RosRule.RedirectConfigProperty redirectConfig) {
                this.redirectConfig = redirectConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getRemoveHeaderConfig}
             * @param removeHeaderConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder removeHeaderConfig(com.aliyun.ros.cdk.core.IResolvable removeHeaderConfig) {
                this.removeHeaderConfig = removeHeaderConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getRemoveHeaderConfig}
             * @param removeHeaderConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder removeHeaderConfig(com.aliyun.ros.cdk.alb.RosRule.RemoveHeaderConfigProperty removeHeaderConfig) {
                this.removeHeaderConfig = removeHeaderConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getRewriteConfig}
             * @param rewriteConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rewriteConfig(com.aliyun.ros.cdk.core.IResolvable rewriteConfig) {
                this.rewriteConfig = rewriteConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getRewriteConfig}
             * @param rewriteConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rewriteConfig(com.aliyun.ros.cdk.alb.RosRule.RewriteConfigProperty rewriteConfig) {
                this.rewriteConfig = rewriteConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getTrafficLimitConfig}
             * @param trafficLimitConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trafficLimitConfig(com.aliyun.ros.cdk.core.IResolvable trafficLimitConfig) {
                this.trafficLimitConfig = trafficLimitConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getTrafficLimitConfig}
             * @param trafficLimitConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trafficLimitConfig(com.aliyun.ros.cdk.alb.RosRule.TrafficLimitConfigProperty trafficLimitConfig) {
                this.trafficLimitConfig = trafficLimitConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getTrafficMirrorConfig}
             * @param trafficMirrorConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trafficMirrorConfig(com.aliyun.ros.cdk.core.IResolvable trafficMirrorConfig) {
                this.trafficMirrorConfig = trafficMirrorConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getTrafficMirrorConfig}
             * @param trafficMirrorConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trafficMirrorConfig(com.aliyun.ros.cdk.alb.RosRule.TrafficMirrorConfigProperty trafficMirrorConfig) {
                this.trafficMirrorConfig = trafficMirrorConfig;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RuleActionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RuleActionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RuleActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuleActionsProperty {
            private final java.lang.Object order;
            private final java.lang.Object type;
            private final java.lang.Object corsConfig;
            private final java.lang.Object fixedResponseConfig;
            private final java.lang.Object forwardGroupConfig;
            private final java.lang.Object insertHeaderConfig;
            private final java.lang.Object redirectConfig;
            private final java.lang.Object removeHeaderConfig;
            private final java.lang.Object rewriteConfig;
            private final java.lang.Object trafficLimitConfig;
            private final java.lang.Object trafficMirrorConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.order = software.amazon.jsii.Kernel.get(this, "order", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.corsConfig = software.amazon.jsii.Kernel.get(this, "corsConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fixedResponseConfig = software.amazon.jsii.Kernel.get(this, "fixedResponseConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.forwardGroupConfig = software.amazon.jsii.Kernel.get(this, "forwardGroupConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.insertHeaderConfig = software.amazon.jsii.Kernel.get(this, "insertHeaderConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.redirectConfig = software.amazon.jsii.Kernel.get(this, "redirectConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.removeHeaderConfig = software.amazon.jsii.Kernel.get(this, "removeHeaderConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rewriteConfig = software.amazon.jsii.Kernel.get(this, "rewriteConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.trafficLimitConfig = software.amazon.jsii.Kernel.get(this, "trafficLimitConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.trafficMirrorConfig = software.amazon.jsii.Kernel.get(this, "trafficMirrorConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.order = java.util.Objects.requireNonNull(builder.order, "order is required");
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.corsConfig = builder.corsConfig;
                this.fixedResponseConfig = builder.fixedResponseConfig;
                this.forwardGroupConfig = builder.forwardGroupConfig;
                this.insertHeaderConfig = builder.insertHeaderConfig;
                this.redirectConfig = builder.redirectConfig;
                this.removeHeaderConfig = builder.removeHeaderConfig;
                this.rewriteConfig = builder.rewriteConfig;
                this.trafficLimitConfig = builder.trafficLimitConfig;
                this.trafficMirrorConfig = builder.trafficMirrorConfig;
            }

            @Override
            public final java.lang.Object getOrder() {
                return this.order;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getCorsConfig() {
                return this.corsConfig;
            }

            @Override
            public final java.lang.Object getFixedResponseConfig() {
                return this.fixedResponseConfig;
            }

            @Override
            public final java.lang.Object getForwardGroupConfig() {
                return this.forwardGroupConfig;
            }

            @Override
            public final java.lang.Object getInsertHeaderConfig() {
                return this.insertHeaderConfig;
            }

            @Override
            public final java.lang.Object getRedirectConfig() {
                return this.redirectConfig;
            }

            @Override
            public final java.lang.Object getRemoveHeaderConfig() {
                return this.removeHeaderConfig;
            }

            @Override
            public final java.lang.Object getRewriteConfig() {
                return this.rewriteConfig;
            }

            @Override
            public final java.lang.Object getTrafficLimitConfig() {
                return this.trafficLimitConfig;
            }

            @Override
            public final java.lang.Object getTrafficMirrorConfig() {
                return this.trafficMirrorConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("order", om.valueToTree(this.getOrder()));
                data.set("type", om.valueToTree(this.getType()));
                if (this.getCorsConfig() != null) {
                    data.set("corsConfig", om.valueToTree(this.getCorsConfig()));
                }
                if (this.getFixedResponseConfig() != null) {
                    data.set("fixedResponseConfig", om.valueToTree(this.getFixedResponseConfig()));
                }
                if (this.getForwardGroupConfig() != null) {
                    data.set("forwardGroupConfig", om.valueToTree(this.getForwardGroupConfig()));
                }
                if (this.getInsertHeaderConfig() != null) {
                    data.set("insertHeaderConfig", om.valueToTree(this.getInsertHeaderConfig()));
                }
                if (this.getRedirectConfig() != null) {
                    data.set("redirectConfig", om.valueToTree(this.getRedirectConfig()));
                }
                if (this.getRemoveHeaderConfig() != null) {
                    data.set("removeHeaderConfig", om.valueToTree(this.getRemoveHeaderConfig()));
                }
                if (this.getRewriteConfig() != null) {
                    data.set("rewriteConfig", om.valueToTree(this.getRewriteConfig()));
                }
                if (this.getTrafficLimitConfig() != null) {
                    data.set("trafficLimitConfig", om.valueToTree(this.getTrafficLimitConfig()));
                }
                if (this.getTrafficMirrorConfig() != null) {
                    data.set("trafficMirrorConfig", om.valueToTree(this.getTrafficMirrorConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.RuleActionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RuleActionsProperty.Jsii$Proxy that = (RuleActionsProperty.Jsii$Proxy) o;

                if (!order.equals(that.order)) return false;
                if (!type.equals(that.type)) return false;
                if (this.corsConfig != null ? !this.corsConfig.equals(that.corsConfig) : that.corsConfig != null) return false;
                if (this.fixedResponseConfig != null ? !this.fixedResponseConfig.equals(that.fixedResponseConfig) : that.fixedResponseConfig != null) return false;
                if (this.forwardGroupConfig != null ? !this.forwardGroupConfig.equals(that.forwardGroupConfig) : that.forwardGroupConfig != null) return false;
                if (this.insertHeaderConfig != null ? !this.insertHeaderConfig.equals(that.insertHeaderConfig) : that.insertHeaderConfig != null) return false;
                if (this.redirectConfig != null ? !this.redirectConfig.equals(that.redirectConfig) : that.redirectConfig != null) return false;
                if (this.removeHeaderConfig != null ? !this.removeHeaderConfig.equals(that.removeHeaderConfig) : that.removeHeaderConfig != null) return false;
                if (this.rewriteConfig != null ? !this.rewriteConfig.equals(that.rewriteConfig) : that.rewriteConfig != null) return false;
                if (this.trafficLimitConfig != null ? !this.trafficLimitConfig.equals(that.trafficLimitConfig) : that.trafficLimitConfig != null) return false;
                return this.trafficMirrorConfig != null ? this.trafficMirrorConfig.equals(that.trafficMirrorConfig) : that.trafficMirrorConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.order.hashCode();
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.corsConfig != null ? this.corsConfig.hashCode() : 0);
                result = 31 * result + (this.fixedResponseConfig != null ? this.fixedResponseConfig.hashCode() : 0);
                result = 31 * result + (this.forwardGroupConfig != null ? this.forwardGroupConfig.hashCode() : 0);
                result = 31 * result + (this.insertHeaderConfig != null ? this.insertHeaderConfig.hashCode() : 0);
                result = 31 * result + (this.redirectConfig != null ? this.redirectConfig.hashCode() : 0);
                result = 31 * result + (this.removeHeaderConfig != null ? this.removeHeaderConfig.hashCode() : 0);
                result = 31 * result + (this.rewriteConfig != null ? this.rewriteConfig.hashCode() : 0);
                result = 31 * result + (this.trafficLimitConfig != null ? this.trafficLimitConfig.hashCode() : 0);
                result = 31 * result + (this.trafficMirrorConfig != null ? this.trafficMirrorConfig.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.RuleConditionsProperty")
    @software.amazon.jsii.Jsii.Proxy(RuleConditionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RuleConditionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCookieConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHeaderConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMethodConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPathConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQueryStringConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResponseHeaderConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResponseStatusCodeConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceIpConfig() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RuleConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RuleConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RuleConditionsProperty> {
            java.lang.Object type;
            java.lang.Object cookieConfig;
            java.lang.Object headerConfig;
            java.lang.Object hostConfig;
            java.lang.Object methodConfig;
            java.lang.Object pathConfig;
            java.lang.Object queryStringConfig;
            java.lang.Object responseHeaderConfig;
            java.lang.Object responseStatusCodeConfig;
            java.lang.Object sourceIpConfig;

            /**
             * Sets the value of {@link RuleConditionsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getCookieConfig}
             * @param cookieConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookieConfig(com.aliyun.ros.cdk.core.IResolvable cookieConfig) {
                this.cookieConfig = cookieConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getCookieConfig}
             * @param cookieConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookieConfig(com.aliyun.ros.cdk.alb.RosRule.CookieConfigProperty cookieConfig) {
                this.cookieConfig = cookieConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getHeaderConfig}
             * @param headerConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerConfig(com.aliyun.ros.cdk.core.IResolvable headerConfig) {
                this.headerConfig = headerConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getHeaderConfig}
             * @param headerConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerConfig(com.aliyun.ros.cdk.alb.RosRule.HeaderConfigProperty headerConfig) {
                this.headerConfig = headerConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getHostConfig}
             * @param hostConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostConfig(com.aliyun.ros.cdk.core.IResolvable hostConfig) {
                this.hostConfig = hostConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getHostConfig}
             * @param hostConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostConfig(com.aliyun.ros.cdk.alb.RosRule.HostConfigProperty hostConfig) {
                this.hostConfig = hostConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getMethodConfig}
             * @param methodConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder methodConfig(com.aliyun.ros.cdk.core.IResolvable methodConfig) {
                this.methodConfig = methodConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getMethodConfig}
             * @param methodConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder methodConfig(com.aliyun.ros.cdk.alb.RosRule.MethodConfigProperty methodConfig) {
                this.methodConfig = methodConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getPathConfig}
             * @param pathConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pathConfig(com.aliyun.ros.cdk.core.IResolvable pathConfig) {
                this.pathConfig = pathConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getPathConfig}
             * @param pathConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pathConfig(com.aliyun.ros.cdk.alb.RosRule.PathConfigProperty pathConfig) {
                this.pathConfig = pathConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getQueryStringConfig}
             * @param queryStringConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryStringConfig(com.aliyun.ros.cdk.core.IResolvable queryStringConfig) {
                this.queryStringConfig = queryStringConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getQueryStringConfig}
             * @param queryStringConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryStringConfig(com.aliyun.ros.cdk.alb.RosRule.QueryStringConfigProperty queryStringConfig) {
                this.queryStringConfig = queryStringConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getResponseHeaderConfig}
             * @param responseHeaderConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseHeaderConfig(com.aliyun.ros.cdk.core.IResolvable responseHeaderConfig) {
                this.responseHeaderConfig = responseHeaderConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getResponseHeaderConfig}
             * @param responseHeaderConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseHeaderConfig(com.aliyun.ros.cdk.alb.RosRule.ResponseHeaderConfigProperty responseHeaderConfig) {
                this.responseHeaderConfig = responseHeaderConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getResponseStatusCodeConfig}
             * @param responseStatusCodeConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseStatusCodeConfig(com.aliyun.ros.cdk.core.IResolvable responseStatusCodeConfig) {
                this.responseStatusCodeConfig = responseStatusCodeConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getResponseStatusCodeConfig}
             * @param responseStatusCodeConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseStatusCodeConfig(com.aliyun.ros.cdk.alb.RosRule.ResponseStatusCodeConfigProperty responseStatusCodeConfig) {
                this.responseStatusCodeConfig = responseStatusCodeConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getSourceIpConfig}
             * @param sourceIpConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceIpConfig(com.aliyun.ros.cdk.core.IResolvable sourceIpConfig) {
                this.sourceIpConfig = sourceIpConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getSourceIpConfig}
             * @param sourceIpConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceIpConfig(com.aliyun.ros.cdk.alb.RosRule.SourceIpConfigProperty sourceIpConfig) {
                this.sourceIpConfig = sourceIpConfig;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RuleConditionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RuleConditionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RuleConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuleConditionsProperty {
            private final java.lang.Object type;
            private final java.lang.Object cookieConfig;
            private final java.lang.Object headerConfig;
            private final java.lang.Object hostConfig;
            private final java.lang.Object methodConfig;
            private final java.lang.Object pathConfig;
            private final java.lang.Object queryStringConfig;
            private final java.lang.Object responseHeaderConfig;
            private final java.lang.Object responseStatusCodeConfig;
            private final java.lang.Object sourceIpConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cookieConfig = software.amazon.jsii.Kernel.get(this, "cookieConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.headerConfig = software.amazon.jsii.Kernel.get(this, "headerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostConfig = software.amazon.jsii.Kernel.get(this, "hostConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.methodConfig = software.amazon.jsii.Kernel.get(this, "methodConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pathConfig = software.amazon.jsii.Kernel.get(this, "pathConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queryStringConfig = software.amazon.jsii.Kernel.get(this, "queryStringConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.responseHeaderConfig = software.amazon.jsii.Kernel.get(this, "responseHeaderConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.responseStatusCodeConfig = software.amazon.jsii.Kernel.get(this, "responseStatusCodeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceIpConfig = software.amazon.jsii.Kernel.get(this, "sourceIpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.cookieConfig = builder.cookieConfig;
                this.headerConfig = builder.headerConfig;
                this.hostConfig = builder.hostConfig;
                this.methodConfig = builder.methodConfig;
                this.pathConfig = builder.pathConfig;
                this.queryStringConfig = builder.queryStringConfig;
                this.responseHeaderConfig = builder.responseHeaderConfig;
                this.responseStatusCodeConfig = builder.responseStatusCodeConfig;
                this.sourceIpConfig = builder.sourceIpConfig;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getCookieConfig() {
                return this.cookieConfig;
            }

            @Override
            public final java.lang.Object getHeaderConfig() {
                return this.headerConfig;
            }

            @Override
            public final java.lang.Object getHostConfig() {
                return this.hostConfig;
            }

            @Override
            public final java.lang.Object getMethodConfig() {
                return this.methodConfig;
            }

            @Override
            public final java.lang.Object getPathConfig() {
                return this.pathConfig;
            }

            @Override
            public final java.lang.Object getQueryStringConfig() {
                return this.queryStringConfig;
            }

            @Override
            public final java.lang.Object getResponseHeaderConfig() {
                return this.responseHeaderConfig;
            }

            @Override
            public final java.lang.Object getResponseStatusCodeConfig() {
                return this.responseStatusCodeConfig;
            }

            @Override
            public final java.lang.Object getSourceIpConfig() {
                return this.sourceIpConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("type", om.valueToTree(this.getType()));
                if (this.getCookieConfig() != null) {
                    data.set("cookieConfig", om.valueToTree(this.getCookieConfig()));
                }
                if (this.getHeaderConfig() != null) {
                    data.set("headerConfig", om.valueToTree(this.getHeaderConfig()));
                }
                if (this.getHostConfig() != null) {
                    data.set("hostConfig", om.valueToTree(this.getHostConfig()));
                }
                if (this.getMethodConfig() != null) {
                    data.set("methodConfig", om.valueToTree(this.getMethodConfig()));
                }
                if (this.getPathConfig() != null) {
                    data.set("pathConfig", om.valueToTree(this.getPathConfig()));
                }
                if (this.getQueryStringConfig() != null) {
                    data.set("queryStringConfig", om.valueToTree(this.getQueryStringConfig()));
                }
                if (this.getResponseHeaderConfig() != null) {
                    data.set("responseHeaderConfig", om.valueToTree(this.getResponseHeaderConfig()));
                }
                if (this.getResponseStatusCodeConfig() != null) {
                    data.set("responseStatusCodeConfig", om.valueToTree(this.getResponseStatusCodeConfig()));
                }
                if (this.getSourceIpConfig() != null) {
                    data.set("sourceIpConfig", om.valueToTree(this.getSourceIpConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.RuleConditionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RuleConditionsProperty.Jsii$Proxy that = (RuleConditionsProperty.Jsii$Proxy) o;

                if (!type.equals(that.type)) return false;
                if (this.cookieConfig != null ? !this.cookieConfig.equals(that.cookieConfig) : that.cookieConfig != null) return false;
                if (this.headerConfig != null ? !this.headerConfig.equals(that.headerConfig) : that.headerConfig != null) return false;
                if (this.hostConfig != null ? !this.hostConfig.equals(that.hostConfig) : that.hostConfig != null) return false;
                if (this.methodConfig != null ? !this.methodConfig.equals(that.methodConfig) : that.methodConfig != null) return false;
                if (this.pathConfig != null ? !this.pathConfig.equals(that.pathConfig) : that.pathConfig != null) return false;
                if (this.queryStringConfig != null ? !this.queryStringConfig.equals(that.queryStringConfig) : that.queryStringConfig != null) return false;
                if (this.responseHeaderConfig != null ? !this.responseHeaderConfig.equals(that.responseHeaderConfig) : that.responseHeaderConfig != null) return false;
                if (this.responseStatusCodeConfig != null ? !this.responseStatusCodeConfig.equals(that.responseStatusCodeConfig) : that.responseStatusCodeConfig != null) return false;
                return this.sourceIpConfig != null ? this.sourceIpConfig.equals(that.sourceIpConfig) : that.sourceIpConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.type.hashCode();
                result = 31 * result + (this.cookieConfig != null ? this.cookieConfig.hashCode() : 0);
                result = 31 * result + (this.headerConfig != null ? this.headerConfig.hashCode() : 0);
                result = 31 * result + (this.hostConfig != null ? this.hostConfig.hashCode() : 0);
                result = 31 * result + (this.methodConfig != null ? this.methodConfig.hashCode() : 0);
                result = 31 * result + (this.pathConfig != null ? this.pathConfig.hashCode() : 0);
                result = 31 * result + (this.queryStringConfig != null ? this.queryStringConfig.hashCode() : 0);
                result = 31 * result + (this.responseHeaderConfig != null ? this.responseHeaderConfig.hashCode() : 0);
                result = 31 * result + (this.responseStatusCodeConfig != null ? this.responseStatusCodeConfig.hashCode() : 0);
                result = 31 * result + (this.sourceIpConfig != null ? this.sourceIpConfig.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.ServerGroupStickySessionProperty")
    @software.amazon.jsii.Jsii.Proxy(ServerGroupStickySessionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServerGroupStickySessionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ServerGroupStickySessionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServerGroupStickySessionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServerGroupStickySessionProperty> {
            java.lang.Object enabled;
            java.lang.Object timeout;

            /**
             * Sets the value of {@link ServerGroupStickySessionProperty#getEnabled}
             * @param enabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(java.lang.Boolean enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link ServerGroupStickySessionProperty#getEnabled}
             * @param enabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(com.aliyun.ros.cdk.core.IResolvable enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link ServerGroupStickySessionProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(java.lang.Number timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link ServerGroupStickySessionProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServerGroupStickySessionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServerGroupStickySessionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServerGroupStickySessionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServerGroupStickySessionProperty {
            private final java.lang.Object enabled;
            private final java.lang.Object timeout;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enabled = software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enabled = builder.enabled;
                this.timeout = builder.timeout;
            }

            @Override
            public final java.lang.Object getEnabled() {
                return this.enabled;
            }

            @Override
            public final java.lang.Object getTimeout() {
                return this.timeout;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnabled() != null) {
                    data.set("enabled", om.valueToTree(this.getEnabled()));
                }
                if (this.getTimeout() != null) {
                    data.set("timeout", om.valueToTree(this.getTimeout()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.ServerGroupStickySessionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServerGroupStickySessionProperty.Jsii$Proxy that = (ServerGroupStickySessionProperty.Jsii$Proxy) o;

                if (this.enabled != null ? !this.enabled.equals(that.enabled) : that.enabled != null) return false;
                return this.timeout != null ? this.timeout.equals(that.timeout) : that.timeout == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enabled != null ? this.enabled.hashCode() : 0;
                result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.ServerGroupTuplesProperty")
    @software.amazon.jsii.Jsii.Proxy(ServerGroupTuplesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServerGroupTuplesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServerGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWeight() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ServerGroupTuplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServerGroupTuplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServerGroupTuplesProperty> {
            java.lang.Object serverGroupId;
            java.lang.Object weight;

            /**
             * Sets the value of {@link ServerGroupTuplesProperty#getServerGroupId}
             * @param serverGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupId(java.lang.String serverGroupId) {
                this.serverGroupId = serverGroupId;
                return this;
            }

            /**
             * Sets the value of {@link ServerGroupTuplesProperty#getServerGroupId}
             * @param serverGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupId(com.aliyun.ros.cdk.core.IResolvable serverGroupId) {
                this.serverGroupId = serverGroupId;
                return this;
            }

            /**
             * Sets the value of {@link ServerGroupTuplesProperty#getWeight}
             * @param weight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weight(java.lang.Number weight) {
                this.weight = weight;
                return this;
            }

            /**
             * Sets the value of {@link ServerGroupTuplesProperty#getWeight}
             * @param weight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weight(com.aliyun.ros.cdk.core.IResolvable weight) {
                this.weight = weight;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServerGroupTuplesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServerGroupTuplesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServerGroupTuplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServerGroupTuplesProperty {
            private final java.lang.Object serverGroupId;
            private final java.lang.Object weight;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.serverGroupId = software.amazon.jsii.Kernel.get(this, "serverGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.weight = software.amazon.jsii.Kernel.get(this, "weight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.serverGroupId = builder.serverGroupId;
                this.weight = builder.weight;
            }

            @Override
            public final java.lang.Object getServerGroupId() {
                return this.serverGroupId;
            }

            @Override
            public final java.lang.Object getWeight() {
                return this.weight;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getServerGroupId() != null) {
                    data.set("serverGroupId", om.valueToTree(this.getServerGroupId()));
                }
                if (this.getWeight() != null) {
                    data.set("weight", om.valueToTree(this.getWeight()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.ServerGroupTuplesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServerGroupTuplesProperty.Jsii$Proxy that = (ServerGroupTuplesProperty.Jsii$Proxy) o;

                if (this.serverGroupId != null ? !this.serverGroupId.equals(that.serverGroupId) : that.serverGroupId != null) return false;
                return this.weight != null ? this.weight.equals(that.weight) : that.weight == null;
            }

            @Override
            public final int hashCode() {
                int result = this.serverGroupId != null ? this.serverGroupId.hashCode() : 0;
                result = 31 * result + (this.weight != null ? this.weight.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.SourceIpConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(SourceIpConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SourceIpConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SourceIpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SourceIpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SourceIpConfigProperty> {
            java.lang.Object values;

            /**
             * Sets the value of {@link SourceIpConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link SourceIpConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SourceIpConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SourceIpConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SourceIpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SourceIpConfigProperty {
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.SourceIpConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SourceIpConfigProperty.Jsii$Proxy that = (SourceIpConfigProperty.Jsii$Proxy) o;

                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.values != null ? this.values.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.TrafficLimitConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(TrafficLimitConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TrafficLimitConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getQps();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPerIpQps() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TrafficLimitConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TrafficLimitConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TrafficLimitConfigProperty> {
            java.lang.Object qps;
            java.lang.Object perIpQps;

            /**
             * Sets the value of {@link TrafficLimitConfigProperty#getQps}
             * @param qps the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder qps(java.lang.Number qps) {
                this.qps = qps;
                return this;
            }

            /**
             * Sets the value of {@link TrafficLimitConfigProperty#getQps}
             * @param qps the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder qps(com.aliyun.ros.cdk.core.IResolvable qps) {
                this.qps = qps;
                return this;
            }

            /**
             * Sets the value of {@link TrafficLimitConfigProperty#getPerIpQps}
             * @param perIpQps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder perIpQps(java.lang.Number perIpQps) {
                this.perIpQps = perIpQps;
                return this;
            }

            /**
             * Sets the value of {@link TrafficLimitConfigProperty#getPerIpQps}
             * @param perIpQps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder perIpQps(com.aliyun.ros.cdk.core.IResolvable perIpQps) {
                this.perIpQps = perIpQps;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TrafficLimitConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TrafficLimitConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TrafficLimitConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TrafficLimitConfigProperty {
            private final java.lang.Object qps;
            private final java.lang.Object perIpQps;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.qps = software.amazon.jsii.Kernel.get(this, "qps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.perIpQps = software.amazon.jsii.Kernel.get(this, "perIpQps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.qps = java.util.Objects.requireNonNull(builder.qps, "qps is required");
                this.perIpQps = builder.perIpQps;
            }

            @Override
            public final java.lang.Object getQps() {
                return this.qps;
            }

            @Override
            public final java.lang.Object getPerIpQps() {
                return this.perIpQps;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("qps", om.valueToTree(this.getQps()));
                if (this.getPerIpQps() != null) {
                    data.set("perIpQps", om.valueToTree(this.getPerIpQps()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.TrafficLimitConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TrafficLimitConfigProperty.Jsii$Proxy that = (TrafficLimitConfigProperty.Jsii$Proxy) o;

                if (!qps.equals(that.qps)) return false;
                return this.perIpQps != null ? this.perIpQps.equals(that.perIpQps) : that.perIpQps == null;
            }

            @Override
            public final int hashCode() {
                int result = this.qps.hashCode();
                result = 31 * result + (this.perIpQps != null ? this.perIpQps.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.TrafficMirrorConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(TrafficMirrorConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TrafficMirrorConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMirrorGroupConfig();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTargetType();

        /**
         * @return a {@link Builder} of {@link TrafficMirrorConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TrafficMirrorConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TrafficMirrorConfigProperty> {
            java.lang.Object mirrorGroupConfig;
            java.lang.Object targetType;

            /**
             * Sets the value of {@link TrafficMirrorConfigProperty#getMirrorGroupConfig}
             * @param mirrorGroupConfig the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorGroupConfig(com.aliyun.ros.cdk.core.IResolvable mirrorGroupConfig) {
                this.mirrorGroupConfig = mirrorGroupConfig;
                return this;
            }

            /**
             * Sets the value of {@link TrafficMirrorConfigProperty#getMirrorGroupConfig}
             * @param mirrorGroupConfig the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorGroupConfig(com.aliyun.ros.cdk.alb.RosRule.MirrorGroupConfigProperty mirrorGroupConfig) {
                this.mirrorGroupConfig = mirrorGroupConfig;
                return this;
            }

            /**
             * Sets the value of {@link TrafficMirrorConfigProperty#getTargetType}
             * @param targetType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetType(java.lang.String targetType) {
                this.targetType = targetType;
                return this;
            }

            /**
             * Sets the value of {@link TrafficMirrorConfigProperty#getTargetType}
             * @param targetType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetType(com.aliyun.ros.cdk.core.IResolvable targetType) {
                this.targetType = targetType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TrafficMirrorConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TrafficMirrorConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TrafficMirrorConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TrafficMirrorConfigProperty {
            private final java.lang.Object mirrorGroupConfig;
            private final java.lang.Object targetType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.mirrorGroupConfig = software.amazon.jsii.Kernel.get(this, "mirrorGroupConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.targetType = software.amazon.jsii.Kernel.get(this, "targetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.mirrorGroupConfig = java.util.Objects.requireNonNull(builder.mirrorGroupConfig, "mirrorGroupConfig is required");
                this.targetType = java.util.Objects.requireNonNull(builder.targetType, "targetType is required");
            }

            @Override
            public final java.lang.Object getMirrorGroupConfig() {
                return this.mirrorGroupConfig;
            }

            @Override
            public final java.lang.Object getTargetType() {
                return this.targetType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("mirrorGroupConfig", om.valueToTree(this.getMirrorGroupConfig()));
                data.set("targetType", om.valueToTree(this.getTargetType()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.TrafficMirrorConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TrafficMirrorConfigProperty.Jsii$Proxy that = (TrafficMirrorConfigProperty.Jsii$Proxy) o;

                if (!mirrorGroupConfig.equals(that.mirrorGroupConfig)) return false;
                return this.targetType.equals(that.targetType);
            }

            @Override
            public final int hashCode() {
                int result = this.mirrorGroupConfig.hashCode();
                result = 31 * result + (this.targetType.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.ValuesProperty")
    @software.amazon.jsii.Jsii.Proxy(ValuesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ValuesProperty extends software.amazon.jsii.JsiiSerializable {

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
         * @return a {@link Builder} of {@link ValuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ValuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ValuesProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link ValuesProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ValuesProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ValuesProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link ValuesProperty#getValue}
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
             * @return a new instance of {@link ValuesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ValuesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ValuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ValuesProperty {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.ValuesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ValuesProperty.Jsii$Proxy that = (ValuesProperty.Jsii$Proxy) o;

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
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.RosRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.RosRule> {
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
        private final com.aliyun.ros.cdk.alb.RosRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.RosRuleProps.Builder();
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
         * @param priority This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleActions This parameter is required.
         */
        public Builder ruleActions(final com.aliyun.ros.cdk.core.IResolvable ruleActions) {
            this.props.ruleActions(ruleActions);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleActions This parameter is required.
         */
        public Builder ruleActions(final java.util.List<? extends java.lang.Object> ruleActions) {
            this.props.ruleActions(ruleActions);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleConditions This parameter is required.
         */
        public Builder ruleConditions(final com.aliyun.ros.cdk.core.IResolvable ruleConditions) {
            this.props.ruleConditions(ruleConditions);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleConditions This parameter is required.
         */
        public Builder ruleConditions(final java.util.List<? extends java.lang.Object> ruleConditions) {
            this.props.ruleConditions(ruleConditions);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param direction This parameter is required.
         */
        public Builder direction(final java.lang.String direction) {
            this.props.direction(direction);
            return this;
        }
        /**
         * @return {@code this}
         * @param direction This parameter is required.
         */
        public Builder direction(final com.aliyun.ros.cdk.core.IResolvable direction) {
            this.props.direction(direction);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.alb.RosRule}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.RosRule build() {
            return new com.aliyun.ros.cdk.alb.RosRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
