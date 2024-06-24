package com.aliyun.ros.cdk.eventbridge;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::EventBridge::Rule</code>, which is used to create an event rule for an event bus.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:07.165Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosRule")
public class RosRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.eventbridge.RosRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.RosRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEventBusName() {
        return software.amazon.jsii.Kernel.get(this, "attrEventBusName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleArn() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getEventBusName() {
        return software.amazon.jsii.Kernel.get(this, "eventBusName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEventBusName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "eventBusName", java.util.Objects.requireNonNull(value, "eventBusName is required"));
    }

    /**
     */
    public void setEventBusName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eventBusName", java.util.Objects.requireNonNull(value, "eventBusName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFilterPattern() {
        return software.amazon.jsii.Kernel.get(this, "filterPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFilterPattern(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "filterPattern", java.util.Objects.requireNonNull(value, "filterPattern is required"));
    }

    /**
     */
    public void setFilterPattern(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "filterPattern", java.util.Objects.requireNonNull(value, "filterPattern is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargets() {
        return software.amazon.jsii.Kernel.get(this, "targets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargets(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targets", java.util.Objects.requireNonNull(value, "targets is required"));
    }

    /**
     */
    public void setTargets(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.eventbridge.RosRule.TargetsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.eventbridge.RosRule.TargetsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "targets", java.util.Objects.requireNonNull(value, "targets is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosRule.ParamListProperty")
    @software.amazon.jsii.Jsii.Proxy(ParamListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ParamListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getForm();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getResourceKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getValue();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTemplate() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ParamListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ParamListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ParamListProperty> {
            java.lang.Object form;
            java.lang.Object resourceKey;
            java.lang.Object value;
            java.lang.Object template;

            /**
             * Sets the value of {@link ParamListProperty#getForm}
             * @param form the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder form(java.lang.String form) {
                this.form = form;
                return this;
            }

            /**
             * Sets the value of {@link ParamListProperty#getForm}
             * @param form the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder form(com.aliyun.ros.cdk.core.IResolvable form) {
                this.form = form;
                return this;
            }

            /**
             * Sets the value of {@link ParamListProperty#getResourceKey}
             * @param resourceKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceKey(java.lang.String resourceKey) {
                this.resourceKey = resourceKey;
                return this;
            }

            /**
             * Sets the value of {@link ParamListProperty#getResourceKey}
             * @param resourceKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceKey(com.aliyun.ros.cdk.core.IResolvable resourceKey) {
                this.resourceKey = resourceKey;
                return this;
            }

            /**
             * Sets the value of {@link ParamListProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link ParamListProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link ParamListProperty#getTemplate}
             * @param template the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder template(java.lang.String template) {
                this.template = template;
                return this;
            }

            /**
             * Sets the value of {@link ParamListProperty#getTemplate}
             * @param template the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder template(com.aliyun.ros.cdk.core.IResolvable template) {
                this.template = template;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ParamListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ParamListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ParamListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ParamListProperty {
            private final java.lang.Object form;
            private final java.lang.Object resourceKey;
            private final java.lang.Object value;
            private final java.lang.Object template;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.form = software.amazon.jsii.Kernel.get(this, "form", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceKey = software.amazon.jsii.Kernel.get(this, "resourceKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.template = software.amazon.jsii.Kernel.get(this, "template", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.form = java.util.Objects.requireNonNull(builder.form, "form is required");
                this.resourceKey = java.util.Objects.requireNonNull(builder.resourceKey, "resourceKey is required");
                this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
                this.template = builder.template;
            }

            @Override
            public final java.lang.Object getForm() {
                return this.form;
            }

            @Override
            public final java.lang.Object getResourceKey() {
                return this.resourceKey;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            public final java.lang.Object getTemplate() {
                return this.template;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("form", om.valueToTree(this.getForm()));
                data.set("resourceKey", om.valueToTree(this.getResourceKey()));
                data.set("value", om.valueToTree(this.getValue()));
                if (this.getTemplate() != null) {
                    data.set("template", om.valueToTree(this.getTemplate()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RosRule.ParamListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ParamListProperty.Jsii$Proxy that = (ParamListProperty.Jsii$Proxy) o;

                if (!form.equals(that.form)) return false;
                if (!resourceKey.equals(that.resourceKey)) return false;
                if (!value.equals(that.value)) return false;
                return this.template != null ? this.template.equals(that.template) : that.template == null;
            }

            @Override
            public final int hashCode() {
                int result = this.form.hashCode();
                result = 31 * result + (this.resourceKey.hashCode());
                result = 31 * result + (this.value.hashCode());
                result = 31 * result + (this.template != null ? this.template.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosRule.TargetsProperty")
    @software.amazon.jsii.Jsii.Proxy(TargetsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TargetsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEndpoint();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getParamList();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPushRetryStrategy() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TargetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TargetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TargetsProperty> {
            java.lang.Object endpoint;
            java.lang.Object id;
            java.lang.Object paramList;
            java.lang.Object type;
            java.lang.Object pushRetryStrategy;

            /**
             * Sets the value of {@link TargetsProperty#getEndpoint}
             * @param endpoint the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(java.lang.String endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link TargetsProperty#getEndpoint}
             * @param endpoint the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(com.aliyun.ros.cdk.core.IResolvable endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link TargetsProperty#getId}
             * @param id the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder id(java.lang.String id) {
                this.id = id;
                return this;
            }

            /**
             * Sets the value of {@link TargetsProperty#getId}
             * @param id the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder id(com.aliyun.ros.cdk.core.IResolvable id) {
                this.id = id;
                return this;
            }

            /**
             * Sets the value of {@link TargetsProperty#getParamList}
             * @param paramList the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder paramList(com.aliyun.ros.cdk.core.IResolvable paramList) {
                this.paramList = paramList;
                return this;
            }

            /**
             * Sets the value of {@link TargetsProperty#getParamList}
             * @param paramList the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder paramList(java.util.List<? extends java.lang.Object> paramList) {
                this.paramList = paramList;
                return this;
            }

            /**
             * Sets the value of {@link TargetsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link TargetsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link TargetsProperty#getPushRetryStrategy}
             * @param pushRetryStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pushRetryStrategy(java.lang.String pushRetryStrategy) {
                this.pushRetryStrategy = pushRetryStrategy;
                return this;
            }

            /**
             * Sets the value of {@link TargetsProperty#getPushRetryStrategy}
             * @param pushRetryStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pushRetryStrategy(com.aliyun.ros.cdk.core.IResolvable pushRetryStrategy) {
                this.pushRetryStrategy = pushRetryStrategy;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TargetsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TargetsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TargetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TargetsProperty {
            private final java.lang.Object endpoint;
            private final java.lang.Object id;
            private final java.lang.Object paramList;
            private final java.lang.Object type;
            private final java.lang.Object pushRetryStrategy;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.id = software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.paramList = software.amazon.jsii.Kernel.get(this, "paramList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pushRetryStrategy = software.amazon.jsii.Kernel.get(this, "pushRetryStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.endpoint = java.util.Objects.requireNonNull(builder.endpoint, "endpoint is required");
                this.id = java.util.Objects.requireNonNull(builder.id, "id is required");
                this.paramList = java.util.Objects.requireNonNull(builder.paramList, "paramList is required");
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.pushRetryStrategy = builder.pushRetryStrategy;
            }

            @Override
            public final java.lang.Object getEndpoint() {
                return this.endpoint;
            }

            @Override
            public final java.lang.Object getId() {
                return this.id;
            }

            @Override
            public final java.lang.Object getParamList() {
                return this.paramList;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getPushRetryStrategy() {
                return this.pushRetryStrategy;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("endpoint", om.valueToTree(this.getEndpoint()));
                data.set("id", om.valueToTree(this.getId()));
                data.set("paramList", om.valueToTree(this.getParamList()));
                data.set("type", om.valueToTree(this.getType()));
                if (this.getPushRetryStrategy() != null) {
                    data.set("pushRetryStrategy", om.valueToTree(this.getPushRetryStrategy()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RosRule.TargetsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TargetsProperty.Jsii$Proxy that = (TargetsProperty.Jsii$Proxy) o;

                if (!endpoint.equals(that.endpoint)) return false;
                if (!id.equals(that.id)) return false;
                if (!paramList.equals(that.paramList)) return false;
                if (!type.equals(that.type)) return false;
                return this.pushRetryStrategy != null ? this.pushRetryStrategy.equals(that.pushRetryStrategy) : that.pushRetryStrategy == null;
            }

            @Override
            public final int hashCode() {
                int result = this.endpoint.hashCode();
                result = 31 * result + (this.id.hashCode());
                result = 31 * result + (this.paramList.hashCode());
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.pushRetryStrategy != null ? this.pushRetryStrategy.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.eventbridge.RosRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.eventbridge.RosRule> {
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
        private final com.aliyun.ros.cdk.eventbridge.RosRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.eventbridge.RosRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param eventBusName This parameter is required.
         */
        public Builder eventBusName(final java.lang.String eventBusName) {
            this.props.eventBusName(eventBusName);
            return this;
        }
        /**
         * @return {@code this}
         * @param eventBusName This parameter is required.
         */
        public Builder eventBusName(final com.aliyun.ros.cdk.core.IResolvable eventBusName) {
            this.props.eventBusName(eventBusName);
            return this;
        }

        /**
         * @return {@code this}
         * @param filterPattern This parameter is required.
         */
        public Builder filterPattern(final com.aliyun.ros.cdk.core.IResolvable filterPattern) {
            this.props.filterPattern(filterPattern);
            return this;
        }
        /**
         * @return {@code this}
         * @param filterPattern This parameter is required.
         */
        public Builder filterPattern(final java.util.Map<java.lang.String, ? extends java.lang.Object> filterPattern) {
            this.props.filterPattern(filterPattern);
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
         * @param targets This parameter is required.
         */
        public Builder targets(final com.aliyun.ros.cdk.core.IResolvable targets) {
            this.props.targets(targets);
            return this;
        }
        /**
         * @return {@code this}
         * @param targets This parameter is required.
         */
        public Builder targets(final java.util.List<? extends java.lang.Object> targets) {
            this.props.targets(targets);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.eventbridge.RosRule}.
         */
        @Override
        public com.aliyun.ros.cdk.eventbridge.RosRule build() {
            return new com.aliyun.ros.cdk.eventbridge.RosRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
