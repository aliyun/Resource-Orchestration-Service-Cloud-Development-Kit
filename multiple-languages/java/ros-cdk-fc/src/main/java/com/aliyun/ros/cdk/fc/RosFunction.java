package com.aliyun.ros.cdk.fc;

/**
 * A ROS template type:  `ALIYUN::FC::Function`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.958Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction")
public class RosFunction extends com.aliyun.ros.cdk.core.RosResource {

    protected RosFunction(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosFunction(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.fc.RosFunction.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::FC::Function`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosFunction(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.RosFunctionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFunctionId() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFunctionName() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.String getFunctionName() {
        return software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setFunctionName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "functionName", java.util.Objects.requireNonNull(value, "functionName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getHandler() {
        return software.amazon.jsii.Kernel.get(this, "handler", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setHandler(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "handler", java.util.Objects.requireNonNull(value, "handler is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getRuntime() {
        return software.amazon.jsii.Kernel.get(this, "runtime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRuntime(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "runtime", java.util.Objects.requireNonNull(value, "runtime is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getServiceName() {
        return software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setServiceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serviceName", java.util.Objects.requireNonNull(value, "serviceName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAsyncConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "asyncConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAsyncConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "asyncConfiguration", value);
    }

    /**
     */
    public void setAsyncConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosFunction.AsyncConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "asyncConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getCaPort() {
        return software.amazon.jsii.Kernel.get(this, "caPort", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setCaPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "caPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCode() {
        return software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "code", value);
    }

    /**
     */
    public void setCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosFunction.CodeProperty value) {
        software.amazon.jsii.Kernel.set(this, "code", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCustomContainerConfig() {
        return software.amazon.jsii.Kernel.get(this, "customContainerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCustomContainerConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "customContainerConfig", value);
    }

    /**
     */
    public void setCustomContainerConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosFunction.CustomContainerConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "customContainerConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentVariables() {
        return software.amazon.jsii.Kernel.get(this, "environmentVariables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnvironmentVariables(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "environmentVariables", value);
    }

    /**
     */
    public void setEnvironmentVariables(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "environmentVariables", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getInitializationTimeout() {
        return software.amazon.jsii.Kernel.get(this, "initializationTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setInitializationTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "initializationTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getInitializer() {
        return software.amazon.jsii.Kernel.get(this, "initializer", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setInitializer(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "initializer", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getInstanceConcurrency() {
        return software.amazon.jsii.Kernel.get(this, "instanceConcurrency", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setInstanceConcurrency(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "instanceConcurrency", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getMemorySize() {
        return software.amazon.jsii.Kernel.get(this, "memorySize", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setMemorySize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "memorySize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getTimeout() {
        return software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeout", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(AsyncConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AsyncConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestination() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getMaxAsyncEventAgeInSeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getMaxAsyncRetryAttempts() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AsyncConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AsyncConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AsyncConfigurationProperty> {
            private java.lang.Object destination;
            private java.lang.Number maxAsyncEventAgeInSeconds;
            private java.lang.Number maxAsyncRetryAttempts;

            /**
             * Sets the value of {@link AsyncConfigurationProperty#getDestination}
             * @param destination the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destination(com.aliyun.ros.cdk.core.IResolvable destination) {
                this.destination = destination;
                return this;
            }

            /**
             * Sets the value of {@link AsyncConfigurationProperty#getDestination}
             * @param destination the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destination(com.aliyun.ros.cdk.fc.RosFunction.DestinationProperty destination) {
                this.destination = destination;
                return this;
            }

            /**
             * Sets the value of {@link AsyncConfigurationProperty#getMaxAsyncEventAgeInSeconds}
             * @param maxAsyncEventAgeInSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxAsyncEventAgeInSeconds(java.lang.Number maxAsyncEventAgeInSeconds) {
                this.maxAsyncEventAgeInSeconds = maxAsyncEventAgeInSeconds;
                return this;
            }

            /**
             * Sets the value of {@link AsyncConfigurationProperty#getMaxAsyncRetryAttempts}
             * @param maxAsyncRetryAttempts the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxAsyncRetryAttempts(java.lang.Number maxAsyncRetryAttempts) {
                this.maxAsyncRetryAttempts = maxAsyncRetryAttempts;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AsyncConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AsyncConfigurationProperty build() {
                return new Jsii$Proxy(destination, maxAsyncEventAgeInSeconds, maxAsyncRetryAttempts);
            }
        }

        /**
         * An implementation for {@link AsyncConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AsyncConfigurationProperty {
            private final java.lang.Object destination;
            private final java.lang.Number maxAsyncEventAgeInSeconds;
            private final java.lang.Number maxAsyncRetryAttempts;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.destination = software.amazon.jsii.Kernel.get(this, "destination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxAsyncEventAgeInSeconds = software.amazon.jsii.Kernel.get(this, "maxAsyncEventAgeInSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.maxAsyncRetryAttempts = software.amazon.jsii.Kernel.get(this, "maxAsyncRetryAttempts", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object destination, final java.lang.Number maxAsyncEventAgeInSeconds, final java.lang.Number maxAsyncRetryAttempts) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.destination = destination;
                this.maxAsyncEventAgeInSeconds = maxAsyncEventAgeInSeconds;
                this.maxAsyncRetryAttempts = maxAsyncRetryAttempts;
            }

            @Override
            public final java.lang.Object getDestination() {
                return this.destination;
            }

            @Override
            public final java.lang.Number getMaxAsyncEventAgeInSeconds() {
                return this.maxAsyncEventAgeInSeconds;
            }

            @Override
            public final java.lang.Number getMaxAsyncRetryAttempts() {
                return this.maxAsyncRetryAttempts;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDestination() != null) {
                    data.set("destination", om.valueToTree(this.getDestination()));
                }
                if (this.getMaxAsyncEventAgeInSeconds() != null) {
                    data.set("maxAsyncEventAgeInSeconds", om.valueToTree(this.getMaxAsyncEventAgeInSeconds()));
                }
                if (this.getMaxAsyncRetryAttempts() != null) {
                    data.set("maxAsyncRetryAttempts", om.valueToTree(this.getMaxAsyncRetryAttempts()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AsyncConfigurationProperty.Jsii$Proxy that = (AsyncConfigurationProperty.Jsii$Proxy) o;

                if (this.destination != null ? !this.destination.equals(that.destination) : that.destination != null) return false;
                if (this.maxAsyncEventAgeInSeconds != null ? !this.maxAsyncEventAgeInSeconds.equals(that.maxAsyncEventAgeInSeconds) : that.maxAsyncEventAgeInSeconds != null) return false;
                return this.maxAsyncRetryAttempts != null ? this.maxAsyncRetryAttempts.equals(that.maxAsyncRetryAttempts) : that.maxAsyncRetryAttempts == null;
            }

            @Override
            public final int hashCode() {
                int result = this.destination != null ? this.destination.hashCode() : 0;
                result = 31 * result + (this.maxAsyncEventAgeInSeconds != null ? this.maxAsyncEventAgeInSeconds.hashCode() : 0);
                result = 31 * result + (this.maxAsyncRetryAttempts != null ? this.maxAsyncRetryAttempts.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.CodeProperty")
    @software.amazon.jsii.Jsii.Proxy(CodeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CodeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getOssBucketName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getOssObjectName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getSourceCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getZipFile() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CodeProperty> {
            private java.lang.String ossBucketName;
            private java.lang.String ossObjectName;
            private java.lang.String sourceCode;
            private java.lang.String zipFile;

            /**
             * Sets the value of {@link CodeProperty#getOssBucketName}
             * @param ossBucketName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossBucketName(java.lang.String ossBucketName) {
                this.ossBucketName = ossBucketName;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getOssObjectName}
             * @param ossObjectName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossObjectName(java.lang.String ossObjectName) {
                this.ossObjectName = ossObjectName;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getSourceCode}
             * @param sourceCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceCode(java.lang.String sourceCode) {
                this.sourceCode = sourceCode;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getZipFile}
             * @param zipFile the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zipFile(java.lang.String zipFile) {
                this.zipFile = zipFile;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CodeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CodeProperty build() {
                return new Jsii$Proxy(ossBucketName, ossObjectName, sourceCode, zipFile);
            }
        }

        /**
         * An implementation for {@link CodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CodeProperty {
            private final java.lang.String ossBucketName;
            private final java.lang.String ossObjectName;
            private final java.lang.String sourceCode;
            private final java.lang.String zipFile;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ossBucketName = software.amazon.jsii.Kernel.get(this, "ossBucketName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.ossObjectName = software.amazon.jsii.Kernel.get(this, "ossObjectName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.sourceCode = software.amazon.jsii.Kernel.get(this, "sourceCode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.zipFile = software.amazon.jsii.Kernel.get(this, "zipFile", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String ossBucketName, final java.lang.String ossObjectName, final java.lang.String sourceCode, final java.lang.String zipFile) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ossBucketName = ossBucketName;
                this.ossObjectName = ossObjectName;
                this.sourceCode = sourceCode;
                this.zipFile = zipFile;
            }

            @Override
            public final java.lang.String getOssBucketName() {
                return this.ossBucketName;
            }

            @Override
            public final java.lang.String getOssObjectName() {
                return this.ossObjectName;
            }

            @Override
            public final java.lang.String getSourceCode() {
                return this.sourceCode;
            }

            @Override
            public final java.lang.String getZipFile() {
                return this.zipFile;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOssBucketName() != null) {
                    data.set("ossBucketName", om.valueToTree(this.getOssBucketName()));
                }
                if (this.getOssObjectName() != null) {
                    data.set("ossObjectName", om.valueToTree(this.getOssObjectName()));
                }
                if (this.getSourceCode() != null) {
                    data.set("sourceCode", om.valueToTree(this.getSourceCode()));
                }
                if (this.getZipFile() != null) {
                    data.set("zipFile", om.valueToTree(this.getZipFile()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.CodeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CodeProperty.Jsii$Proxy that = (CodeProperty.Jsii$Proxy) o;

                if (this.ossBucketName != null ? !this.ossBucketName.equals(that.ossBucketName) : that.ossBucketName != null) return false;
                if (this.ossObjectName != null ? !this.ossObjectName.equals(that.ossObjectName) : that.ossObjectName != null) return false;
                if (this.sourceCode != null ? !this.sourceCode.equals(that.sourceCode) : that.sourceCode != null) return false;
                return this.zipFile != null ? this.zipFile.equals(that.zipFile) : that.zipFile == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ossBucketName != null ? this.ossBucketName.hashCode() : 0;
                result = 31 * result + (this.ossObjectName != null ? this.ossObjectName.hashCode() : 0);
                result = 31 * result + (this.sourceCode != null ? this.sourceCode.hashCode() : 0);
                result = 31 * result + (this.zipFile != null ? this.zipFile.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.CustomContainerConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(CustomContainerConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CustomContainerConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getImage();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getArgs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getCommand() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CustomContainerConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CustomContainerConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CustomContainerConfigProperty> {
            private java.lang.String image;
            private java.lang.String args;
            private java.lang.String command;

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getImage}
             * @param image the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(java.lang.String image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getArgs}
             * @param args the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder args(java.lang.String args) {
                this.args = args;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(java.lang.String command) {
                this.command = command;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CustomContainerConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CustomContainerConfigProperty build() {
                return new Jsii$Proxy(image, args, command);
            }
        }

        /**
         * An implementation for {@link CustomContainerConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomContainerConfigProperty {
            private final java.lang.String image;
            private final java.lang.String args;
            private final java.lang.String command;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.args = software.amazon.jsii.Kernel.get(this, "args", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String image, final java.lang.String args, final java.lang.String command) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.image = java.util.Objects.requireNonNull(image, "image is required");
                this.args = args;
                this.command = command;
            }

            @Override
            public final java.lang.String getImage() {
                return this.image;
            }

            @Override
            public final java.lang.String getArgs() {
                return this.args;
            }

            @Override
            public final java.lang.String getCommand() {
                return this.command;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("image", om.valueToTree(this.getImage()));
                if (this.getArgs() != null) {
                    data.set("args", om.valueToTree(this.getArgs()));
                }
                if (this.getCommand() != null) {
                    data.set("command", om.valueToTree(this.getCommand()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.CustomContainerConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CustomContainerConfigProperty.Jsii$Proxy that = (CustomContainerConfigProperty.Jsii$Proxy) o;

                if (!image.equals(that.image)) return false;
                if (this.args != null ? !this.args.equals(that.args) : that.args != null) return false;
                return this.command != null ? this.command.equals(that.command) : that.command == null;
            }

            @Override
            public final int hashCode() {
                int result = this.image.hashCode();
                result = 31 * result + (this.args != null ? this.args.hashCode() : 0);
                result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.DestinationProperty")
    @software.amazon.jsii.Jsii.Proxy(DestinationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DestinationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getOnFailure() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getOnSuccess() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DestinationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DestinationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DestinationProperty> {
            private java.lang.String onFailure;
            private java.lang.String onSuccess;

            /**
             * Sets the value of {@link DestinationProperty#getOnFailure}
             * @param onFailure the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onFailure(java.lang.String onFailure) {
                this.onFailure = onFailure;
                return this;
            }

            /**
             * Sets the value of {@link DestinationProperty#getOnSuccess}
             * @param onSuccess the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onSuccess(java.lang.String onSuccess) {
                this.onSuccess = onSuccess;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DestinationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DestinationProperty build() {
                return new Jsii$Proxy(onFailure, onSuccess);
            }
        }

        /**
         * An implementation for {@link DestinationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DestinationProperty {
            private final java.lang.String onFailure;
            private final java.lang.String onSuccess;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.onFailure = software.amazon.jsii.Kernel.get(this, "onFailure", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.onSuccess = software.amazon.jsii.Kernel.get(this, "onSuccess", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String onFailure, final java.lang.String onSuccess) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.onFailure = onFailure;
                this.onSuccess = onSuccess;
            }

            @Override
            public final java.lang.String getOnFailure() {
                return this.onFailure;
            }

            @Override
            public final java.lang.String getOnSuccess() {
                return this.onSuccess;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOnFailure() != null) {
                    data.set("onFailure", om.valueToTree(this.getOnFailure()));
                }
                if (this.getOnSuccess() != null) {
                    data.set("onSuccess", om.valueToTree(this.getOnSuccess()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.DestinationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DestinationProperty.Jsii$Proxy that = (DestinationProperty.Jsii$Proxy) o;

                if (this.onFailure != null ? !this.onFailure.equals(that.onFailure) : that.onFailure != null) return false;
                return this.onSuccess != null ? this.onSuccess.equals(that.onSuccess) : that.onSuccess == null;
            }

            @Override
            public final int hashCode() {
                int result = this.onFailure != null ? this.onFailure.hashCode() : 0;
                result = 31 * result + (this.onSuccess != null ? this.onSuccess.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.RosFunction}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.RosFunction> {
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
        private final com.aliyun.ros.cdk.fc.RosFunctionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.RosFunctionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param functionName This parameter is required.
         */
        public Builder functionName(final java.lang.String functionName) {
            this.props.functionName(functionName);
            return this;
        }

        /**
         * @return {@code this}
         * @param handler This parameter is required.
         */
        public Builder handler(final java.lang.String handler) {
            this.props.handler(handler);
            return this;
        }

        /**
         * @return {@code this}
         * @param runtime This parameter is required.
         */
        public Builder runtime(final java.lang.String runtime) {
            this.props.runtime(runtime);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceName This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param asyncConfiguration This parameter is required.
         */
        public Builder asyncConfiguration(final com.aliyun.ros.cdk.core.IResolvable asyncConfiguration) {
            this.props.asyncConfiguration(asyncConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param asyncConfiguration This parameter is required.
         */
        public Builder asyncConfiguration(final com.aliyun.ros.cdk.fc.RosFunction.AsyncConfigurationProperty asyncConfiguration) {
            this.props.asyncConfiguration(asyncConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param caPort This parameter is required.
         */
        public Builder caPort(final java.lang.Number caPort) {
            this.props.caPort(caPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param code This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.core.IResolvable code) {
            this.props.code(code);
            return this;
        }
        /**
         * @return {@code this}
         * @param code This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.fc.RosFunction.CodeProperty code) {
            this.props.code(code);
            return this;
        }

        /**
         * @return {@code this}
         * @param customContainerConfig This parameter is required.
         */
        public Builder customContainerConfig(final com.aliyun.ros.cdk.core.IResolvable customContainerConfig) {
            this.props.customContainerConfig(customContainerConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param customContainerConfig This parameter is required.
         */
        public Builder customContainerConfig(final com.aliyun.ros.cdk.fc.RosFunction.CustomContainerConfigProperty customContainerConfig) {
            this.props.customContainerConfig(customContainerConfig);
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
         * @param environmentVariables This parameter is required.
         */
        public Builder environmentVariables(final com.aliyun.ros.cdk.core.IResolvable environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }
        /**
         * @return {@code this}
         * @param environmentVariables This parameter is required.
         */
        public Builder environmentVariables(final java.util.Map<java.lang.String, ? extends java.lang.Object> environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }

        /**
         * @return {@code this}
         * @param initializationTimeout This parameter is required.
         */
        public Builder initializationTimeout(final java.lang.Number initializationTimeout) {
            this.props.initializationTimeout(initializationTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param initializer This parameter is required.
         */
        public Builder initializer(final java.lang.String initializer) {
            this.props.initializer(initializer);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceConcurrency This parameter is required.
         */
        public Builder instanceConcurrency(final java.lang.Number instanceConcurrency) {
            this.props.instanceConcurrency(instanceConcurrency);
            return this;
        }

        /**
         * @return {@code this}
         * @param memorySize This parameter is required.
         */
        public Builder memorySize(final java.lang.Number memorySize) {
            this.props.memorySize(memorySize);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.fc.RosFunction}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.RosFunction build() {
            return new com.aliyun.ros.cdk.fc.RosFunction(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
