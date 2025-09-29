package com.aliyun.ros.cdk.fc3;

/**
 * Properties for defining a <code>AsyncInvokeConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-asyncinvokeconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.883Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.AsyncInvokeConfigProps")
@software.amazon.jsii.Jsii.Proxy(AsyncInvokeConfigProps.Jsii$Proxy.class)
public interface AsyncInvokeConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property functionName: Function name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFunctionName();

    /**
     * Property asyncTask: Whether to enable asynchronous tasks (optional).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAsyncTask() {
        return null;
    }

    /**
     * Property destinationConfig: Configuration structure of asynchronous invocation target (optional).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationConfig() {
        return null;
    }

    /**
     * Property maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxAsyncEventAgeInSeconds() {
        return null;
    }

    /**
     * Property maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional.
     * <p>
     * Value range [0,8]. When not configured, the default number of retries is 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxAsyncRetryAttempts() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AsyncInvokeConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AsyncInvokeConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AsyncInvokeConfigProps> {
        java.lang.Object functionName;
        java.lang.Object asyncTask;
        java.lang.Object destinationConfig;
        java.lang.Object maxAsyncEventAgeInSeconds;
        java.lang.Object maxAsyncRetryAttempts;

        /**
         * Sets the value of {@link AsyncInvokeConfigProps#getFunctionName}
         * @param functionName Property functionName: Function name. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(java.lang.String functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link AsyncInvokeConfigProps#getFunctionName}
         * @param functionName Property functionName: Function name. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link AsyncInvokeConfigProps#getAsyncTask}
         * @param asyncTask Property asyncTask: Whether to enable asynchronous tasks (optional).
         * @return {@code this}
         */
        public Builder asyncTask(java.lang.Boolean asyncTask) {
            this.asyncTask = asyncTask;
            return this;
        }

        /**
         * Sets the value of {@link AsyncInvokeConfigProps#getAsyncTask}
         * @param asyncTask Property asyncTask: Whether to enable asynchronous tasks (optional).
         * @return {@code this}
         */
        public Builder asyncTask(com.aliyun.ros.cdk.core.IResolvable asyncTask) {
            this.asyncTask = asyncTask;
            return this;
        }

        /**
         * Sets the value of {@link AsyncInvokeConfigProps#getDestinationConfig}
         * @param destinationConfig Property destinationConfig: Configuration structure of asynchronous invocation target (optional).
         * @return {@code this}
         */
        public Builder destinationConfig(com.aliyun.ros.cdk.core.IResolvable destinationConfig) {
            this.destinationConfig = destinationConfig;
            return this;
        }

        /**
         * Sets the value of {@link AsyncInvokeConfigProps#getDestinationConfig}
         * @param destinationConfig Property destinationConfig: Configuration structure of asynchronous invocation target (optional).
         * @return {@code this}
         */
        public Builder destinationConfig(com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfig.DestinationConfigProperty destinationConfig) {
            this.destinationConfig = destinationConfig;
            return this;
        }

        /**
         * Sets the value of {@link AsyncInvokeConfigProps#getMaxAsyncEventAgeInSeconds}
         * @param maxAsyncEventAgeInSeconds Property maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
         * @return {@code this}
         */
        public Builder maxAsyncEventAgeInSeconds(java.lang.Number maxAsyncEventAgeInSeconds) {
            this.maxAsyncEventAgeInSeconds = maxAsyncEventAgeInSeconds;
            return this;
        }

        /**
         * Sets the value of {@link AsyncInvokeConfigProps#getMaxAsyncEventAgeInSeconds}
         * @param maxAsyncEventAgeInSeconds Property maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
         * @return {@code this}
         */
        public Builder maxAsyncEventAgeInSeconds(com.aliyun.ros.cdk.core.IResolvable maxAsyncEventAgeInSeconds) {
            this.maxAsyncEventAgeInSeconds = maxAsyncEventAgeInSeconds;
            return this;
        }

        /**
         * Sets the value of {@link AsyncInvokeConfigProps#getMaxAsyncRetryAttempts}
         * @param maxAsyncRetryAttempts Property maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional.
         *                              Value range [0,8]. When not configured, the default number of retries is 3.
         * @return {@code this}
         */
        public Builder maxAsyncRetryAttempts(java.lang.Number maxAsyncRetryAttempts) {
            this.maxAsyncRetryAttempts = maxAsyncRetryAttempts;
            return this;
        }

        /**
         * Sets the value of {@link AsyncInvokeConfigProps#getMaxAsyncRetryAttempts}
         * @param maxAsyncRetryAttempts Property maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional.
         *                              Value range [0,8]. When not configured, the default number of retries is 3.
         * @return {@code this}
         */
        public Builder maxAsyncRetryAttempts(com.aliyun.ros.cdk.core.IResolvable maxAsyncRetryAttempts) {
            this.maxAsyncRetryAttempts = maxAsyncRetryAttempts;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AsyncInvokeConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AsyncInvokeConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AsyncInvokeConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AsyncInvokeConfigProps {
        private final java.lang.Object functionName;
        private final java.lang.Object asyncTask;
        private final java.lang.Object destinationConfig;
        private final java.lang.Object maxAsyncEventAgeInSeconds;
        private final java.lang.Object maxAsyncRetryAttempts;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.asyncTask = software.amazon.jsii.Kernel.get(this, "asyncTask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationConfig = software.amazon.jsii.Kernel.get(this, "destinationConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxAsyncEventAgeInSeconds = software.amazon.jsii.Kernel.get(this, "maxAsyncEventAgeInSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxAsyncRetryAttempts = software.amazon.jsii.Kernel.get(this, "maxAsyncRetryAttempts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.functionName = java.util.Objects.requireNonNull(builder.functionName, "functionName is required");
            this.asyncTask = builder.asyncTask;
            this.destinationConfig = builder.destinationConfig;
            this.maxAsyncEventAgeInSeconds = builder.maxAsyncEventAgeInSeconds;
            this.maxAsyncRetryAttempts = builder.maxAsyncRetryAttempts;
        }

        @Override
        public final java.lang.Object getFunctionName() {
            return this.functionName;
        }

        @Override
        public final java.lang.Object getAsyncTask() {
            return this.asyncTask;
        }

        @Override
        public final java.lang.Object getDestinationConfig() {
            return this.destinationConfig;
        }

        @Override
        public final java.lang.Object getMaxAsyncEventAgeInSeconds() {
            return this.maxAsyncEventAgeInSeconds;
        }

        @Override
        public final java.lang.Object getMaxAsyncRetryAttempts() {
            return this.maxAsyncRetryAttempts;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("functionName", om.valueToTree(this.getFunctionName()));
            if (this.getAsyncTask() != null) {
                data.set("asyncTask", om.valueToTree(this.getAsyncTask()));
            }
            if (this.getDestinationConfig() != null) {
                data.set("destinationConfig", om.valueToTree(this.getDestinationConfig()));
            }
            if (this.getMaxAsyncEventAgeInSeconds() != null) {
                data.set("maxAsyncEventAgeInSeconds", om.valueToTree(this.getMaxAsyncEventAgeInSeconds()));
            }
            if (this.getMaxAsyncRetryAttempts() != null) {
                data.set("maxAsyncRetryAttempts", om.valueToTree(this.getMaxAsyncRetryAttempts()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.AsyncInvokeConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AsyncInvokeConfigProps.Jsii$Proxy that = (AsyncInvokeConfigProps.Jsii$Proxy) o;

            if (!functionName.equals(that.functionName)) return false;
            if (this.asyncTask != null ? !this.asyncTask.equals(that.asyncTask) : that.asyncTask != null) return false;
            if (this.destinationConfig != null ? !this.destinationConfig.equals(that.destinationConfig) : that.destinationConfig != null) return false;
            if (this.maxAsyncEventAgeInSeconds != null ? !this.maxAsyncEventAgeInSeconds.equals(that.maxAsyncEventAgeInSeconds) : that.maxAsyncEventAgeInSeconds != null) return false;
            return this.maxAsyncRetryAttempts != null ? this.maxAsyncRetryAttempts.equals(that.maxAsyncRetryAttempts) : that.maxAsyncRetryAttempts == null;
        }

        @Override
        public final int hashCode() {
            int result = this.functionName.hashCode();
            result = 31 * result + (this.asyncTask != null ? this.asyncTask.hashCode() : 0);
            result = 31 * result + (this.destinationConfig != null ? this.destinationConfig.hashCode() : 0);
            result = 31 * result + (this.maxAsyncEventAgeInSeconds != null ? this.maxAsyncEventAgeInSeconds.hashCode() : 0);
            result = 31 * result + (this.maxAsyncRetryAttempts != null ? this.maxAsyncRetryAttempts.hashCode() : 0);
            return result;
        }
    }
}
