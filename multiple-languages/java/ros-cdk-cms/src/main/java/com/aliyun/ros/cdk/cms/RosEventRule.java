package com.aliyun.ros.cdk.cms;

/**
 * A ROS template type:  `ALIYUN::CMS::EventRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:18.380Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosEventRule")
public class RosEventRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosEventRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosEventRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms.RosEventRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::CMS::EventRule`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosEventRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosEventRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrData() {
        return software.amazon.jsii.Kernel.get(this, "attrData", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getEventPattern() {
        return software.amazon.jsii.Kernel.get(this, "eventPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEventPattern(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eventPattern", java.util.Objects.requireNonNull(value, "eventPattern is required"));
    }

    /**
     */
    public void setEventPattern(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cms.RosEventRule.EventPatternProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cms.RosEventRule.EventPatternProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "eventPattern", java.util.Objects.requireNonNull(value, "eventPattern is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getEventType() {
        return software.amazon.jsii.Kernel.get(this, "eventType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEventType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "eventType", value);
    }

    /**
     */
    public void setEventType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eventType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
        return software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupId", value);
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getState() {
        return software.amazon.jsii.Kernel.get(this, "state", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setState(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "state", value);
    }

    /**
     */
    public void setState(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "state", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosEventRule.EventPatternProperty")
    @software.amazon.jsii.Jsii.Proxy(EventPatternProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EventPatternProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEventTypeList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLevelList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNameList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProduct() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStatusList() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EventPatternProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EventPatternProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EventPatternProperty> {
            java.lang.Object eventTypeList;
            java.lang.Object levelList;
            java.lang.Object nameList;
            java.lang.Object product;
            java.lang.Object statusList;

            /**
             * Sets the value of {@link EventPatternProperty#getEventTypeList}
             * @param eventTypeList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder eventTypeList(java.util.List<? extends java.lang.Object> eventTypeList) {
                this.eventTypeList = eventTypeList;
                return this;
            }

            /**
             * Sets the value of {@link EventPatternProperty#getEventTypeList}
             * @param eventTypeList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder eventTypeList(com.aliyun.ros.cdk.core.IResolvable eventTypeList) {
                this.eventTypeList = eventTypeList;
                return this;
            }

            /**
             * Sets the value of {@link EventPatternProperty#getLevelList}
             * @param levelList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder levelList(java.util.List<? extends java.lang.Object> levelList) {
                this.levelList = levelList;
                return this;
            }

            /**
             * Sets the value of {@link EventPatternProperty#getLevelList}
             * @param levelList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder levelList(com.aliyun.ros.cdk.core.IResolvable levelList) {
                this.levelList = levelList;
                return this;
            }

            /**
             * Sets the value of {@link EventPatternProperty#getNameList}
             * @param nameList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nameList(java.util.List<? extends java.lang.Object> nameList) {
                this.nameList = nameList;
                return this;
            }

            /**
             * Sets the value of {@link EventPatternProperty#getNameList}
             * @param nameList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nameList(com.aliyun.ros.cdk.core.IResolvable nameList) {
                this.nameList = nameList;
                return this;
            }

            /**
             * Sets the value of {@link EventPatternProperty#getProduct}
             * @param product the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder product(java.lang.String product) {
                this.product = product;
                return this;
            }

            /**
             * Sets the value of {@link EventPatternProperty#getProduct}
             * @param product the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder product(com.aliyun.ros.cdk.core.IResolvable product) {
                this.product = product;
                return this;
            }

            /**
             * Sets the value of {@link EventPatternProperty#getStatusList}
             * @param statusList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statusList(java.util.List<? extends java.lang.Object> statusList) {
                this.statusList = statusList;
                return this;
            }

            /**
             * Sets the value of {@link EventPatternProperty#getStatusList}
             * @param statusList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statusList(com.aliyun.ros.cdk.core.IResolvable statusList) {
                this.statusList = statusList;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EventPatternProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EventPatternProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EventPatternProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EventPatternProperty {
            private final java.lang.Object eventTypeList;
            private final java.lang.Object levelList;
            private final java.lang.Object nameList;
            private final java.lang.Object product;
            private final java.lang.Object statusList;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.eventTypeList = software.amazon.jsii.Kernel.get(this, "eventTypeList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.levelList = software.amazon.jsii.Kernel.get(this, "levelList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nameList = software.amazon.jsii.Kernel.get(this, "nameList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.product = software.amazon.jsii.Kernel.get(this, "product", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.statusList = software.amazon.jsii.Kernel.get(this, "statusList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.eventTypeList = builder.eventTypeList;
                this.levelList = builder.levelList;
                this.nameList = builder.nameList;
                this.product = builder.product;
                this.statusList = builder.statusList;
            }

            @Override
            public final java.lang.Object getEventTypeList() {
                return this.eventTypeList;
            }

            @Override
            public final java.lang.Object getLevelList() {
                return this.levelList;
            }

            @Override
            public final java.lang.Object getNameList() {
                return this.nameList;
            }

            @Override
            public final java.lang.Object getProduct() {
                return this.product;
            }

            @Override
            public final java.lang.Object getStatusList() {
                return this.statusList;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEventTypeList() != null) {
                    data.set("eventTypeList", om.valueToTree(this.getEventTypeList()));
                }
                if (this.getLevelList() != null) {
                    data.set("levelList", om.valueToTree(this.getLevelList()));
                }
                if (this.getNameList() != null) {
                    data.set("nameList", om.valueToTree(this.getNameList()));
                }
                if (this.getProduct() != null) {
                    data.set("product", om.valueToTree(this.getProduct()));
                }
                if (this.getStatusList() != null) {
                    data.set("statusList", om.valueToTree(this.getStatusList()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosEventRule.EventPatternProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EventPatternProperty.Jsii$Proxy that = (EventPatternProperty.Jsii$Proxy) o;

                if (this.eventTypeList != null ? !this.eventTypeList.equals(that.eventTypeList) : that.eventTypeList != null) return false;
                if (this.levelList != null ? !this.levelList.equals(that.levelList) : that.levelList != null) return false;
                if (this.nameList != null ? !this.nameList.equals(that.nameList) : that.nameList != null) return false;
                if (this.product != null ? !this.product.equals(that.product) : that.product != null) return false;
                return this.statusList != null ? this.statusList.equals(that.statusList) : that.statusList == null;
            }

            @Override
            public final int hashCode() {
                int result = this.eventTypeList != null ? this.eventTypeList.hashCode() : 0;
                result = 31 * result + (this.levelList != null ? this.levelList.hashCode() : 0);
                result = 31 * result + (this.nameList != null ? this.nameList.hashCode() : 0);
                result = 31 * result + (this.product != null ? this.product.hashCode() : 0);
                result = 31 * result + (this.statusList != null ? this.statusList.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.RosEventRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.RosEventRule> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cms.RosEventRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.RosEventRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param eventPattern This parameter is required.
         */
        public Builder eventPattern(final com.aliyun.ros.cdk.core.IResolvable eventPattern) {
            this.props.eventPattern(eventPattern);
            return this;
        }
        /**
         * @return {@code this}
         * @param eventPattern This parameter is required.
         */
        public Builder eventPattern(final java.util.List<? extends java.lang.Object> eventPattern) {
            this.props.eventPattern(eventPattern);
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
         * @param eventType This parameter is required.
         */
        public Builder eventType(final java.lang.String eventType) {
            this.props.eventType(eventType);
            return this;
        }
        /**
         * @return {@code this}
         * @param eventType This parameter is required.
         */
        public Builder eventType(final com.aliyun.ros.cdk.core.IResolvable eventType) {
            this.props.eventType(eventType);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param state This parameter is required.
         */
        public Builder state(final java.lang.String state) {
            this.props.state(state);
            return this;
        }
        /**
         * @return {@code this}
         * @param state This parameter is required.
         */
        public Builder state(final com.aliyun.ros.cdk.core.IResolvable state) {
            this.props.state(state);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cms.RosEventRule}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.RosEventRule build() {
            return new com.aliyun.ros.cdk.cms.RosEventRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
