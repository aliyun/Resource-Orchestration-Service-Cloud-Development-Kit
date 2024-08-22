package com.aliyun.ros.cdk.arms;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ARMS::DeliverTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:17.897Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosDeliverTask")
public class RosDeliverTask extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDeliverTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDeliverTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.arms.RosDeliverTask.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDeliverTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.RosDeliverTaskProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetList() {
        return software.amazon.jsii.Kernel.get(this, "targetList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetList", java.util.Objects.requireNonNull(value, "targetList is required"));
    }

    /**
     */
    public void setTargetList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.arms.RosDeliverTask.TargetListProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.arms.RosDeliverTask.TargetListProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "targetList", java.util.Objects.requireNonNull(value, "targetList is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTaskName() {
        return software.amazon.jsii.Kernel.get(this, "taskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTaskName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "taskName", java.util.Objects.requireNonNull(value, "taskName is required"));
    }

    /**
     */
    public void setTaskName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "taskName", java.util.Objects.requireNonNull(value, "taskName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataSourceId() {
        return software.amazon.jsii.Kernel.get(this, "dataSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataSourceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dataSourceId", value);
    }

    /**
     */
    public void setDataSourceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataSourceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataSourceName() {
        return software.amazon.jsii.Kernel.get(this, "dataSourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataSourceName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dataSourceName", value);
    }

    /**
     */
    public void setDataSourceName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataSourceName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExternalLabel() {
        return software.amazon.jsii.Kernel.get(this, "externalLabel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExternalLabel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "externalLabel", value);
    }

    /**
     */
    public void setExternalLabel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "externalLabel", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFilterList() {
        return software.amazon.jsii.Kernel.get(this, "filterList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFilterList(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "filterList", value);
    }

    /**
     */
    public void setFilterList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "filterList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFilterType() {
        return software.amazon.jsii.Kernel.get(this, "filterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFilterType(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "filterType", value);
    }

    /**
     */
    public void setFilterType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "filterType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTaskDescription() {
        return software.amazon.jsii.Kernel.get(this, "taskDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTaskDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "taskDescription", value);
    }

    /**
     */
    public void setTaskDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "taskDescription", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosDeliverTask.TargetListProperty")
    @software.amazon.jsii.Jsii.Proxy(TargetListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TargetListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTargetType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFaultTolerantPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRetryPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTargetName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTargetParam() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TargetListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TargetListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TargetListProperty> {
            java.lang.Object targetType;
            java.lang.Object faultTolerantPolicy;
            java.lang.Object retryPolicy;
            java.lang.Object targetName;
            java.lang.Object targetParam;

            /**
             * Sets the value of {@link TargetListProperty#getTargetType}
             * @param targetType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetType(java.lang.String targetType) {
                this.targetType = targetType;
                return this;
            }

            /**
             * Sets the value of {@link TargetListProperty#getTargetType}
             * @param targetType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetType(com.aliyun.ros.cdk.core.IResolvable targetType) {
                this.targetType = targetType;
                return this;
            }

            /**
             * Sets the value of {@link TargetListProperty#getFaultTolerantPolicy}
             * @param faultTolerantPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder faultTolerantPolicy(java.lang.String faultTolerantPolicy) {
                this.faultTolerantPolicy = faultTolerantPolicy;
                return this;
            }

            /**
             * Sets the value of {@link TargetListProperty#getFaultTolerantPolicy}
             * @param faultTolerantPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder faultTolerantPolicy(com.aliyun.ros.cdk.core.IResolvable faultTolerantPolicy) {
                this.faultTolerantPolicy = faultTolerantPolicy;
                return this;
            }

            /**
             * Sets the value of {@link TargetListProperty#getRetryPolicy}
             * @param retryPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retryPolicy(java.lang.String retryPolicy) {
                this.retryPolicy = retryPolicy;
                return this;
            }

            /**
             * Sets the value of {@link TargetListProperty#getRetryPolicy}
             * @param retryPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retryPolicy(com.aliyun.ros.cdk.core.IResolvable retryPolicy) {
                this.retryPolicy = retryPolicy;
                return this;
            }

            /**
             * Sets the value of {@link TargetListProperty#getTargetName}
             * @param targetName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetName(java.lang.String targetName) {
                this.targetName = targetName;
                return this;
            }

            /**
             * Sets the value of {@link TargetListProperty#getTargetName}
             * @param targetName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetName(com.aliyun.ros.cdk.core.IResolvable targetName) {
                this.targetName = targetName;
                return this;
            }

            /**
             * Sets the value of {@link TargetListProperty#getTargetParam}
             * @param targetParam the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetParam(java.lang.String targetParam) {
                this.targetParam = targetParam;
                return this;
            }

            /**
             * Sets the value of {@link TargetListProperty#getTargetParam}
             * @param targetParam the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetParam(com.aliyun.ros.cdk.core.IResolvable targetParam) {
                this.targetParam = targetParam;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TargetListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TargetListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TargetListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TargetListProperty {
            private final java.lang.Object targetType;
            private final java.lang.Object faultTolerantPolicy;
            private final java.lang.Object retryPolicy;
            private final java.lang.Object targetName;
            private final java.lang.Object targetParam;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.targetType = software.amazon.jsii.Kernel.get(this, "targetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.faultTolerantPolicy = software.amazon.jsii.Kernel.get(this, "faultTolerantPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.retryPolicy = software.amazon.jsii.Kernel.get(this, "retryPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.targetName = software.amazon.jsii.Kernel.get(this, "targetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.targetParam = software.amazon.jsii.Kernel.get(this, "targetParam", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.targetType = java.util.Objects.requireNonNull(builder.targetType, "targetType is required");
                this.faultTolerantPolicy = builder.faultTolerantPolicy;
                this.retryPolicy = builder.retryPolicy;
                this.targetName = builder.targetName;
                this.targetParam = builder.targetParam;
            }

            @Override
            public final java.lang.Object getTargetType() {
                return this.targetType;
            }

            @Override
            public final java.lang.Object getFaultTolerantPolicy() {
                return this.faultTolerantPolicy;
            }

            @Override
            public final java.lang.Object getRetryPolicy() {
                return this.retryPolicy;
            }

            @Override
            public final java.lang.Object getTargetName() {
                return this.targetName;
            }

            @Override
            public final java.lang.Object getTargetParam() {
                return this.targetParam;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("targetType", om.valueToTree(this.getTargetType()));
                if (this.getFaultTolerantPolicy() != null) {
                    data.set("faultTolerantPolicy", om.valueToTree(this.getFaultTolerantPolicy()));
                }
                if (this.getRetryPolicy() != null) {
                    data.set("retryPolicy", om.valueToTree(this.getRetryPolicy()));
                }
                if (this.getTargetName() != null) {
                    data.set("targetName", om.valueToTree(this.getTargetName()));
                }
                if (this.getTargetParam() != null) {
                    data.set("targetParam", om.valueToTree(this.getTargetParam()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.RosDeliverTask.TargetListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TargetListProperty.Jsii$Proxy that = (TargetListProperty.Jsii$Proxy) o;

                if (!targetType.equals(that.targetType)) return false;
                if (this.faultTolerantPolicy != null ? !this.faultTolerantPolicy.equals(that.faultTolerantPolicy) : that.faultTolerantPolicy != null) return false;
                if (this.retryPolicy != null ? !this.retryPolicy.equals(that.retryPolicy) : that.retryPolicy != null) return false;
                if (this.targetName != null ? !this.targetName.equals(that.targetName) : that.targetName != null) return false;
                return this.targetParam != null ? this.targetParam.equals(that.targetParam) : that.targetParam == null;
            }

            @Override
            public final int hashCode() {
                int result = this.targetType.hashCode();
                result = 31 * result + (this.faultTolerantPolicy != null ? this.faultTolerantPolicy.hashCode() : 0);
                result = 31 * result + (this.retryPolicy != null ? this.retryPolicy.hashCode() : 0);
                result = 31 * result + (this.targetName != null ? this.targetName.hashCode() : 0);
                result = 31 * result + (this.targetParam != null ? this.targetParam.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.RosDeliverTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.RosDeliverTask> {
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
        private final com.aliyun.ros.cdk.arms.RosDeliverTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.RosDeliverTaskProps.Builder();
        }

        /**
         * @return {@code this}
         * @param targetList This parameter is required.
         */
        public Builder targetList(final com.aliyun.ros.cdk.core.IResolvable targetList) {
            this.props.targetList(targetList);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetList This parameter is required.
         */
        public Builder targetList(final java.util.List<? extends java.lang.Object> targetList) {
            this.props.targetList(targetList);
            return this;
        }

        /**
         * @return {@code this}
         * @param taskName This parameter is required.
         */
        public Builder taskName(final java.lang.String taskName) {
            this.props.taskName(taskName);
            return this;
        }
        /**
         * @return {@code this}
         * @param taskName This parameter is required.
         */
        public Builder taskName(final com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.props.taskName(taskName);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataSourceId This parameter is required.
         */
        public Builder dataSourceId(final java.lang.String dataSourceId) {
            this.props.dataSourceId(dataSourceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataSourceId This parameter is required.
         */
        public Builder dataSourceId(final com.aliyun.ros.cdk.core.IResolvable dataSourceId) {
            this.props.dataSourceId(dataSourceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataSourceName This parameter is required.
         */
        public Builder dataSourceName(final java.lang.String dataSourceName) {
            this.props.dataSourceName(dataSourceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataSourceName This parameter is required.
         */
        public Builder dataSourceName(final com.aliyun.ros.cdk.core.IResolvable dataSourceName) {
            this.props.dataSourceName(dataSourceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param externalLabel This parameter is required.
         */
        public Builder externalLabel(final java.lang.String externalLabel) {
            this.props.externalLabel(externalLabel);
            return this;
        }
        /**
         * @return {@code this}
         * @param externalLabel This parameter is required.
         */
        public Builder externalLabel(final com.aliyun.ros.cdk.core.IResolvable externalLabel) {
            this.props.externalLabel(externalLabel);
            return this;
        }

        /**
         * @return {@code this}
         * @param filterList This parameter is required.
         */
        public Builder filterList(final java.lang.String filterList) {
            this.props.filterList(filterList);
            return this;
        }
        /**
         * @return {@code this}
         * @param filterList This parameter is required.
         */
        public Builder filterList(final com.aliyun.ros.cdk.core.IResolvable filterList) {
            this.props.filterList(filterList);
            return this;
        }

        /**
         * @return {@code this}
         * @param filterType This parameter is required.
         */
        public Builder filterType(final java.lang.Boolean filterType) {
            this.props.filterType(filterType);
            return this;
        }
        /**
         * @return {@code this}
         * @param filterType This parameter is required.
         */
        public Builder filterType(final com.aliyun.ros.cdk.core.IResolvable filterType) {
            this.props.filterType(filterType);
            return this;
        }

        /**
         * @return {@code this}
         * @param taskDescription This parameter is required.
         */
        public Builder taskDescription(final java.lang.String taskDescription) {
            this.props.taskDescription(taskDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param taskDescription This parameter is required.
         */
        public Builder taskDescription(final com.aliyun.ros.cdk.core.IResolvable taskDescription) {
            this.props.taskDescription(taskDescription);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.RosDeliverTask}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.RosDeliverTask build() {
            return new com.aliyun.ros.cdk.arms.RosDeliverTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
