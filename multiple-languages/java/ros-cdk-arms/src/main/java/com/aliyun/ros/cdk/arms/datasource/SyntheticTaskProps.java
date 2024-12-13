package com.aliyun.ros.cdk.arms.datasource;

/**
 * Properties for defining a <code>SyntheticTask</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictask
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:04.848Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.datasource.SyntheticTaskProps")
@software.amazon.jsii.Jsii.Proxy(SyntheticTaskProps.Jsii$Proxy.class)
public interface SyntheticTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property taskId: The ID of the synthetic monitoring task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTaskId();

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SyntheticTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SyntheticTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SyntheticTaskProps> {
        java.lang.Object taskId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link SyntheticTaskProps#getTaskId}
         * @param taskId Property taskId: The ID of the synthetic monitoring task. This parameter is required.
         * @return {@code this}
         */
        public Builder taskId(java.lang.String taskId) {
            this.taskId = taskId;
            return this;
        }

        /**
         * Sets the value of {@link SyntheticTaskProps#getTaskId}
         * @param taskId Property taskId: The ID of the synthetic monitoring task. This parameter is required.
         * @return {@code this}
         */
        public Builder taskId(com.aliyun.ros.cdk.core.IResolvable taskId) {
            this.taskId = taskId;
            return this;
        }

        /**
         * Sets the value of {@link SyntheticTaskProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link SyntheticTaskProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SyntheticTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SyntheticTaskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SyntheticTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SyntheticTaskProps {
        private final java.lang.Object taskId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.taskId = software.amazon.jsii.Kernel.get(this, "taskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.taskId = java.util.Objects.requireNonNull(builder.taskId, "taskId is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getTaskId() {
            return this.taskId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("taskId", om.valueToTree(this.getTaskId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.datasource.SyntheticTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SyntheticTaskProps.Jsii$Proxy that = (SyntheticTaskProps.Jsii$Proxy) o;

            if (!taskId.equals(that.taskId)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.taskId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}