package com.aliyun.ros.cdk.dts.datasource;

/**
 * Properties for defining a <code>JobMonitorRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.833Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.datasource.JobMonitorRuleProps")
@software.amazon.jsii.Jsii.Proxy(JobMonitorRuleProps.Jsii$Proxy.class)
public interface JobMonitorRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dtsJobId: The ID of the data migration, data synchronization, or change tracking task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDtsJobId();

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
     * @return a {@link Builder} of {@link JobMonitorRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link JobMonitorRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<JobMonitorRuleProps> {
        java.lang.Object dtsJobId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link JobMonitorRuleProps#getDtsJobId}
         * @param dtsJobId Property dtsJobId: The ID of the data migration, data synchronization, or change tracking task. This parameter is required.
         * @return {@code this}
         */
        public Builder dtsJobId(java.lang.String dtsJobId) {
            this.dtsJobId = dtsJobId;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getDtsJobId}
         * @param dtsJobId Property dtsJobId: The ID of the data migration, data synchronization, or change tracking task. This parameter is required.
         * @return {@code this}
         */
        public Builder dtsJobId(com.aliyun.ros.cdk.core.IResolvable dtsJobId) {
            this.dtsJobId = dtsJobId;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getRefreshOptions}
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
         * Sets the value of {@link JobMonitorRuleProps#getRefreshOptions}
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
         * @return a new instance of {@link JobMonitorRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public JobMonitorRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link JobMonitorRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements JobMonitorRuleProps {
        private final java.lang.Object dtsJobId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dtsJobId = software.amazon.jsii.Kernel.get(this, "dtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dtsJobId = java.util.Objects.requireNonNull(builder.dtsJobId, "dtsJobId is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getDtsJobId() {
            return this.dtsJobId;
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

            data.set("dtsJobId", om.valueToTree(this.getDtsJobId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.datasource.JobMonitorRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            JobMonitorRuleProps.Jsii$Proxy that = (JobMonitorRuleProps.Jsii$Proxy) o;

            if (!dtsJobId.equals(that.dtsJobId)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dtsJobId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
