package com.aliyun.ros.cdk.oos;

/**
 * A ROS template type:  `ALIYUN::OOS::Execution`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:26.445Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.RosExecution")
public class RosExecution extends com.aliyun.ros.cdk.core.RosResource {

    protected RosExecution(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosExecution(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.oos.RosExecution.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::OOS::Execution`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosExecution(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.RosExecutionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCounters() {
        return software.amazon.jsii.Kernel.get(this, "attrCounters", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCurlCli() {
        return software.amazon.jsii.Kernel.get(this, "attrCurlCli", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExecutionId() {
        return software.amazon.jsii.Kernel.get(this, "attrExecutionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOutputs() {
        return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPowerShellCurlCli() {
        return software.amazon.jsii.Kernel.get(this, "attrPowerShellCurlCli", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatusMessage() {
        return software.amazon.jsii.Kernel.get(this, "attrStatusMessage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWindowsCurlCli() {
        return software.amazon.jsii.Kernel.get(this, "attrWindowsCurlCli", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "templateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateName", java.util.Objects.requireNonNull(value, "templateName is required"));
    }

    /**
     */
    public void setTemplateName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateName", java.util.Objects.requireNonNull(value, "templateName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
        return software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mode", value);
    }

    /**
     */
    public void setMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "parameters", value);
    }

    /**
     */
    public void setParameters(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "parameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getParentExecutionId() {
        return software.amazon.jsii.Kernel.get(this, "parentExecutionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setParentExecutionId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "parentExecutionId", value);
    }

    /**
     */
    public void setParentExecutionId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "parentExecutionId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceOptions() {
        return software.amazon.jsii.Kernel.get(this, "resourceOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceOptions", value);
    }

    /**
     */
    public void setResourceOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oos.RosExecution.ResourceOptionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "resourceOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSafetyCheck() {
        return software.amazon.jsii.Kernel.get(this, "safetyCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSafetyCheck(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "safetyCheck", value);
    }

    /**
     */
    public void setSafetyCheck(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "safetyCheck", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.Object>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateVersion() {
        return software.amazon.jsii.Kernel.get(this, "templateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateVersion", value);
    }

    /**
     */
    public void setTemplateVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateVersion", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.RosExecution.ResourceOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(ResourceOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResourceOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCancelOnDelete() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFailureStatuses() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSuccessStatuses() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ResourceOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResourceOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResourceOptionsProperty> {
            java.lang.Object cancelOnDelete;
            java.lang.Object failureStatuses;
            java.lang.Object successStatuses;
            java.lang.Object timeout;

            /**
             * Sets the value of {@link ResourceOptionsProperty#getCancelOnDelete}
             * @param cancelOnDelete the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cancelOnDelete(java.lang.Boolean cancelOnDelete) {
                this.cancelOnDelete = cancelOnDelete;
                return this;
            }

            /**
             * Sets the value of {@link ResourceOptionsProperty#getCancelOnDelete}
             * @param cancelOnDelete the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cancelOnDelete(com.aliyun.ros.cdk.core.IResolvable cancelOnDelete) {
                this.cancelOnDelete = cancelOnDelete;
                return this;
            }

            /**
             * Sets the value of {@link ResourceOptionsProperty#getFailureStatuses}
             * @param failureStatuses the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureStatuses(java.util.List<? extends java.lang.Object> failureStatuses) {
                this.failureStatuses = failureStatuses;
                return this;
            }

            /**
             * Sets the value of {@link ResourceOptionsProperty#getFailureStatuses}
             * @param failureStatuses the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureStatuses(com.aliyun.ros.cdk.core.IResolvable failureStatuses) {
                this.failureStatuses = failureStatuses;
                return this;
            }

            /**
             * Sets the value of {@link ResourceOptionsProperty#getSuccessStatuses}
             * @param successStatuses the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successStatuses(java.util.List<? extends java.lang.Object> successStatuses) {
                this.successStatuses = successStatuses;
                return this;
            }

            /**
             * Sets the value of {@link ResourceOptionsProperty#getSuccessStatuses}
             * @param successStatuses the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successStatuses(com.aliyun.ros.cdk.core.IResolvable successStatuses) {
                this.successStatuses = successStatuses;
                return this;
            }

            /**
             * Sets the value of {@link ResourceOptionsProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(java.lang.Number timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link ResourceOptionsProperty#getTimeout}
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
             * @return a new instance of {@link ResourceOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResourceOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResourceOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceOptionsProperty {
            private final java.lang.Object cancelOnDelete;
            private final java.lang.Object failureStatuses;
            private final java.lang.Object successStatuses;
            private final java.lang.Object timeout;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cancelOnDelete = software.amazon.jsii.Kernel.get(this, "cancelOnDelete", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.failureStatuses = software.amazon.jsii.Kernel.get(this, "failureStatuses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.successStatuses = software.amazon.jsii.Kernel.get(this, "successStatuses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cancelOnDelete = builder.cancelOnDelete;
                this.failureStatuses = builder.failureStatuses;
                this.successStatuses = builder.successStatuses;
                this.timeout = builder.timeout;
            }

            @Override
            public final java.lang.Object getCancelOnDelete() {
                return this.cancelOnDelete;
            }

            @Override
            public final java.lang.Object getFailureStatuses() {
                return this.failureStatuses;
            }

            @Override
            public final java.lang.Object getSuccessStatuses() {
                return this.successStatuses;
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

                if (this.getCancelOnDelete() != null) {
                    data.set("cancelOnDelete", om.valueToTree(this.getCancelOnDelete()));
                }
                if (this.getFailureStatuses() != null) {
                    data.set("failureStatuses", om.valueToTree(this.getFailureStatuses()));
                }
                if (this.getSuccessStatuses() != null) {
                    data.set("successStatuses", om.valueToTree(this.getSuccessStatuses()));
                }
                if (this.getTimeout() != null) {
                    data.set("timeout", om.valueToTree(this.getTimeout()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.RosExecution.ResourceOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResourceOptionsProperty.Jsii$Proxy that = (ResourceOptionsProperty.Jsii$Proxy) o;

                if (this.cancelOnDelete != null ? !this.cancelOnDelete.equals(that.cancelOnDelete) : that.cancelOnDelete != null) return false;
                if (this.failureStatuses != null ? !this.failureStatuses.equals(that.failureStatuses) : that.failureStatuses != null) return false;
                if (this.successStatuses != null ? !this.successStatuses.equals(that.successStatuses) : that.successStatuses != null) return false;
                return this.timeout != null ? this.timeout.equals(that.timeout) : that.timeout == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cancelOnDelete != null ? this.cancelOnDelete.hashCode() : 0;
                result = 31 * result + (this.failureStatuses != null ? this.failureStatuses.hashCode() : 0);
                result = 31 * result + (this.successStatuses != null ? this.successStatuses.hashCode() : 0);
                result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.RosExecution}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.RosExecution> {
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
        private final com.aliyun.ros.cdk.oos.RosExecutionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oos.RosExecutionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param templateName This parameter is required.
         */
        public Builder templateName(final java.lang.String templateName) {
            this.props.templateName(templateName);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateName This parameter is required.
         */
        public Builder templateName(final com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.props.templateName(templateName);
            return this;
        }

        /**
         * @return {@code this}
         * @param mode This parameter is required.
         */
        public Builder mode(final java.lang.String mode) {
            this.props.mode(mode);
            return this;
        }
        /**
         * @return {@code this}
         * @param mode This parameter is required.
         */
        public Builder mode(final com.aliyun.ros.cdk.core.IResolvable mode) {
            this.props.mode(mode);
            return this;
        }

        /**
         * @return {@code this}
         * @param parameters This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param parameters This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param parentExecutionId This parameter is required.
         */
        public Builder parentExecutionId(final java.lang.String parentExecutionId) {
            this.props.parentExecutionId(parentExecutionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param parentExecutionId This parameter is required.
         */
        public Builder parentExecutionId(final com.aliyun.ros.cdk.core.IResolvable parentExecutionId) {
            this.props.parentExecutionId(parentExecutionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceOptions This parameter is required.
         */
        public Builder resourceOptions(final com.aliyun.ros.cdk.core.IResolvable resourceOptions) {
            this.props.resourceOptions(resourceOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceOptions This parameter is required.
         */
        public Builder resourceOptions(final com.aliyun.ros.cdk.oos.RosExecution.ResourceOptionsProperty resourceOptions) {
            this.props.resourceOptions(resourceOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param safetyCheck This parameter is required.
         */
        public Builder safetyCheck(final java.lang.String safetyCheck) {
            this.props.safetyCheck(safetyCheck);
            return this;
        }
        /**
         * @return {@code this}
         * @param safetyCheck This parameter is required.
         */
        public Builder safetyCheck(final com.aliyun.ros.cdk.core.IResolvable safetyCheck) {
            this.props.safetyCheck(safetyCheck);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateVersion This parameter is required.
         */
        public Builder templateVersion(final java.lang.String templateVersion) {
            this.props.templateVersion(templateVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateVersion This parameter is required.
         */
        public Builder templateVersion(final com.aliyun.ros.cdk.core.IResolvable templateVersion) {
            this.props.templateVersion(templateVersion);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.oos.RosExecution}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.RosExecution build() {
            return new com.aliyun.ros.cdk.oos.RosExecution(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
