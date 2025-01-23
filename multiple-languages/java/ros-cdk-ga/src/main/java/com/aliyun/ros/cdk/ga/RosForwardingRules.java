package com.aliyun.ros.cdk.ga;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::GA::ForwardingRules</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.521Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosForwardingRules")
public class RosForwardingRules extends com.aliyun.ros.cdk.core.RosResource {

    protected RosForwardingRules(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosForwardingRules(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ga.RosForwardingRules.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosForwardingRules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.RosForwardingRulesProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrForwardingRuleIds() {
        return software.amazon.jsii.Kernel.get(this, "attrForwardingRuleIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId() {
        return software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAcceleratorId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "acceleratorId", java.util.Objects.requireNonNull(value, "acceleratorId is required"));
    }

    /**
     */
    public void setAcceleratorId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "acceleratorId", java.util.Objects.requireNonNull(value, "acceleratorId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getForwardingRules() {
        return software.amazon.jsii.Kernel.get(this, "forwardingRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setForwardingRules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "forwardingRules", java.util.Objects.requireNonNull(value, "forwardingRules is required"));
    }

    /**
     */
    public void setForwardingRules(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ga.RosForwardingRules.ForwardingRulesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ga.RosForwardingRules.ForwardingRulesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "forwardingRules", java.util.Objects.requireNonNull(value, "forwardingRules is required"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosForwardingRules.ForwardingRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(ForwardingRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ForwardingRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRuleActions();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRuleConditions();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getForwardingRuleName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRuleDirection() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ForwardingRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ForwardingRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ForwardingRulesProperty> {
            java.lang.Object ruleActions;
            java.lang.Object ruleConditions;
            java.lang.Object forwardingRuleName;
            java.lang.Object priority;
            java.lang.Object ruleDirection;

            /**
             * Sets the value of {@link ForwardingRulesProperty#getRuleActions}
             * @param ruleActions the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleActions(com.aliyun.ros.cdk.core.IResolvable ruleActions) {
                this.ruleActions = ruleActions;
                return this;
            }

            /**
             * Sets the value of {@link ForwardingRulesProperty#getRuleActions}
             * @param ruleActions the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleActions(java.util.List<? extends java.lang.Object> ruleActions) {
                this.ruleActions = ruleActions;
                return this;
            }

            /**
             * Sets the value of {@link ForwardingRulesProperty#getRuleConditions}
             * @param ruleConditions the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleConditions(com.aliyun.ros.cdk.core.IResolvable ruleConditions) {
                this.ruleConditions = ruleConditions;
                return this;
            }

            /**
             * Sets the value of {@link ForwardingRulesProperty#getRuleConditions}
             * @param ruleConditions the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleConditions(java.util.List<? extends java.lang.Object> ruleConditions) {
                this.ruleConditions = ruleConditions;
                return this;
            }

            /**
             * Sets the value of {@link ForwardingRulesProperty#getForwardingRuleName}
             * @param forwardingRuleName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder forwardingRuleName(java.lang.String forwardingRuleName) {
                this.forwardingRuleName = forwardingRuleName;
                return this;
            }

            /**
             * Sets the value of {@link ForwardingRulesProperty#getForwardingRuleName}
             * @param forwardingRuleName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder forwardingRuleName(com.aliyun.ros.cdk.core.IResolvable forwardingRuleName) {
                this.forwardingRuleName = forwardingRuleName;
                return this;
            }

            /**
             * Sets the value of {@link ForwardingRulesProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(java.lang.Number priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link ForwardingRulesProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link ForwardingRulesProperty#getRuleDirection}
             * @param ruleDirection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleDirection(java.lang.String ruleDirection) {
                this.ruleDirection = ruleDirection;
                return this;
            }

            /**
             * Sets the value of {@link ForwardingRulesProperty#getRuleDirection}
             * @param ruleDirection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleDirection(com.aliyun.ros.cdk.core.IResolvable ruleDirection) {
                this.ruleDirection = ruleDirection;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ForwardingRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ForwardingRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ForwardingRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ForwardingRulesProperty {
            private final java.lang.Object ruleActions;
            private final java.lang.Object ruleConditions;
            private final java.lang.Object forwardingRuleName;
            private final java.lang.Object priority;
            private final java.lang.Object ruleDirection;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ruleActions = software.amazon.jsii.Kernel.get(this, "ruleActions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ruleConditions = software.amazon.jsii.Kernel.get(this, "ruleConditions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.forwardingRuleName = software.amazon.jsii.Kernel.get(this, "forwardingRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ruleDirection = software.amazon.jsii.Kernel.get(this, "ruleDirection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ruleActions = java.util.Objects.requireNonNull(builder.ruleActions, "ruleActions is required");
                this.ruleConditions = java.util.Objects.requireNonNull(builder.ruleConditions, "ruleConditions is required");
                this.forwardingRuleName = builder.forwardingRuleName;
                this.priority = builder.priority;
                this.ruleDirection = builder.ruleDirection;
            }

            @Override
            public final java.lang.Object getRuleActions() {
                return this.ruleActions;
            }

            @Override
            public final java.lang.Object getRuleConditions() {
                return this.ruleConditions;
            }

            @Override
            public final java.lang.Object getForwardingRuleName() {
                return this.forwardingRuleName;
            }

            @Override
            public final java.lang.Object getPriority() {
                return this.priority;
            }

            @Override
            public final java.lang.Object getRuleDirection() {
                return this.ruleDirection;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("ruleActions", om.valueToTree(this.getRuleActions()));
                data.set("ruleConditions", om.valueToTree(this.getRuleConditions()));
                if (this.getForwardingRuleName() != null) {
                    data.set("forwardingRuleName", om.valueToTree(this.getForwardingRuleName()));
                }
                if (this.getPriority() != null) {
                    data.set("priority", om.valueToTree(this.getPriority()));
                }
                if (this.getRuleDirection() != null) {
                    data.set("ruleDirection", om.valueToTree(this.getRuleDirection()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosForwardingRules.ForwardingRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ForwardingRulesProperty.Jsii$Proxy that = (ForwardingRulesProperty.Jsii$Proxy) o;

                if (!ruleActions.equals(that.ruleActions)) return false;
                if (!ruleConditions.equals(that.ruleConditions)) return false;
                if (this.forwardingRuleName != null ? !this.forwardingRuleName.equals(that.forwardingRuleName) : that.forwardingRuleName != null) return false;
                if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
                return this.ruleDirection != null ? this.ruleDirection.equals(that.ruleDirection) : that.ruleDirection == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ruleActions.hashCode();
                result = 31 * result + (this.ruleConditions.hashCode());
                result = 31 * result + (this.forwardingRuleName != null ? this.forwardingRuleName.hashCode() : 0);
                result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
                result = 31 * result + (this.ruleDirection != null ? this.ruleDirection.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosForwardingRules.RuleActionsProperty")
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
        @org.jetbrains.annotations.NotNull java.lang.Object getRuleActionType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRuleActionValue() {
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
            java.lang.Object ruleActionType;
            java.lang.Object ruleActionValue;

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
             * Sets the value of {@link RuleActionsProperty#getRuleActionType}
             * @param ruleActionType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleActionType(java.lang.String ruleActionType) {
                this.ruleActionType = ruleActionType;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getRuleActionType}
             * @param ruleActionType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleActionType(com.aliyun.ros.cdk.core.IResolvable ruleActionType) {
                this.ruleActionType = ruleActionType;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getRuleActionValue}
             * @param ruleActionValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleActionValue(java.lang.String ruleActionValue) {
                this.ruleActionValue = ruleActionValue;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getRuleActionValue}
             * @param ruleActionValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleActionValue(com.aliyun.ros.cdk.core.IResolvable ruleActionValue) {
                this.ruleActionValue = ruleActionValue;
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
            private final java.lang.Object ruleActionType;
            private final java.lang.Object ruleActionValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.order = software.amazon.jsii.Kernel.get(this, "order", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ruleActionType = software.amazon.jsii.Kernel.get(this, "ruleActionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ruleActionValue = software.amazon.jsii.Kernel.get(this, "ruleActionValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.order = java.util.Objects.requireNonNull(builder.order, "order is required");
                this.ruleActionType = java.util.Objects.requireNonNull(builder.ruleActionType, "ruleActionType is required");
                this.ruleActionValue = builder.ruleActionValue;
            }

            @Override
            public final java.lang.Object getOrder() {
                return this.order;
            }

            @Override
            public final java.lang.Object getRuleActionType() {
                return this.ruleActionType;
            }

            @Override
            public final java.lang.Object getRuleActionValue() {
                return this.ruleActionValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("order", om.valueToTree(this.getOrder()));
                data.set("ruleActionType", om.valueToTree(this.getRuleActionType()));
                if (this.getRuleActionValue() != null) {
                    data.set("ruleActionValue", om.valueToTree(this.getRuleActionValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosForwardingRules.RuleActionsProperty"));
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
                if (!ruleActionType.equals(that.ruleActionType)) return false;
                return this.ruleActionValue != null ? this.ruleActionValue.equals(that.ruleActionValue) : that.ruleActionValue == null;
            }

            @Override
            public final int hashCode() {
                int result = this.order.hashCode();
                result = 31 * result + (this.ruleActionType.hashCode());
                result = 31 * result + (this.ruleActionValue != null ? this.ruleActionValue.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosForwardingRules.RuleConditionsProperty")
    @software.amazon.jsii.Jsii.Proxy(RuleConditionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RuleConditionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRuleConditionType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRuleConditionValue() {
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
            java.lang.Object ruleConditionType;
            java.lang.Object ruleConditionValue;

            /**
             * Sets the value of {@link RuleConditionsProperty#getRuleConditionType}
             * @param ruleConditionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleConditionType(java.lang.String ruleConditionType) {
                this.ruleConditionType = ruleConditionType;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getRuleConditionType}
             * @param ruleConditionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleConditionType(com.aliyun.ros.cdk.core.IResolvable ruleConditionType) {
                this.ruleConditionType = ruleConditionType;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getRuleConditionValue}
             * @param ruleConditionValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleConditionValue(java.lang.String ruleConditionValue) {
                this.ruleConditionValue = ruleConditionValue;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getRuleConditionValue}
             * @param ruleConditionValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleConditionValue(com.aliyun.ros.cdk.core.IResolvable ruleConditionValue) {
                this.ruleConditionValue = ruleConditionValue;
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
            private final java.lang.Object ruleConditionType;
            private final java.lang.Object ruleConditionValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ruleConditionType = software.amazon.jsii.Kernel.get(this, "ruleConditionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ruleConditionValue = software.amazon.jsii.Kernel.get(this, "ruleConditionValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ruleConditionType = builder.ruleConditionType;
                this.ruleConditionValue = builder.ruleConditionValue;
            }

            @Override
            public final java.lang.Object getRuleConditionType() {
                return this.ruleConditionType;
            }

            @Override
            public final java.lang.Object getRuleConditionValue() {
                return this.ruleConditionValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getRuleConditionType() != null) {
                    data.set("ruleConditionType", om.valueToTree(this.getRuleConditionType()));
                }
                if (this.getRuleConditionValue() != null) {
                    data.set("ruleConditionValue", om.valueToTree(this.getRuleConditionValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosForwardingRules.RuleConditionsProperty"));
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

                if (this.ruleConditionType != null ? !this.ruleConditionType.equals(that.ruleConditionType) : that.ruleConditionType != null) return false;
                return this.ruleConditionValue != null ? this.ruleConditionValue.equals(that.ruleConditionValue) : that.ruleConditionValue == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ruleConditionType != null ? this.ruleConditionType.hashCode() : 0;
                result = 31 * result + (this.ruleConditionValue != null ? this.ruleConditionValue.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.RosForwardingRules}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.RosForwardingRules> {
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
        private final com.aliyun.ros.cdk.ga.RosForwardingRulesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.RosForwardingRulesProps.Builder();
        }

        /**
         * @return {@code this}
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }
        /**
         * @return {@code this}
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * @return {@code this}
         * @param forwardingRules This parameter is required.
         */
        public Builder forwardingRules(final com.aliyun.ros.cdk.core.IResolvable forwardingRules) {
            this.props.forwardingRules(forwardingRules);
            return this;
        }
        /**
         * @return {@code this}
         * @param forwardingRules This parameter is required.
         */
        public Builder forwardingRules(final java.util.List<? extends java.lang.Object> forwardingRules) {
            this.props.forwardingRules(forwardingRules);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.RosForwardingRules}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.RosForwardingRules build() {
            return new com.aliyun.ros.cdk.ga.RosForwardingRules(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
