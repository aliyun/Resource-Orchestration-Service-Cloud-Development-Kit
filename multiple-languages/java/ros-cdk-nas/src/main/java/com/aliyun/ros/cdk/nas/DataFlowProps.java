package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a <code>DataFlow</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:53.190Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.DataFlowProps")
@software.amazon.jsii.Jsii.Proxy(DataFlowProps.Jsii$Proxy.class)
public interface DataFlowProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property fileSystemId: File system ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemId();

    /**
     * Property fsetId: Fileset ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFsetId();

    /**
     * Property sourceStorage: Access path stored at the source.Format: <storage Type>: // <PATH>. in: Storage Type: Currently only supports OSS. PATH: OSS's bucket name.Limit the following. Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number. The length is 8 ~ 128 English characters. Use UTF-8 encoding. Can't start with http: // and https: //. Explain that the OSS BUCKET must be the bucket that exists in the region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceStorage();

    /**
     * Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB/s. Value:  600 1200 1500.
     * <p>
     * Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getThroughput();

    /**
     * Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory.
     * <p>
     * If there is data update, start the automatic update task, unit: minute.
     * Scope of value: 5 ~ 525600, default value: 10.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRefreshInterval() {
        return null;
    }

    /**
     * Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.
     * <p>
     * None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
     * Importchanged: The data update at the source automatically imports CPFS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRefreshPolicy() {
        return null;
    }

    /**
     * Property autoRefreshs:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRefreshs() {
        return null;
    }

    /**
     * Property description: Description of data flow.
     * <p>
     * limit:
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property sourceSecurityType: The type of safety protection types of the source storage.
     * <p>
     * If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
     * No (default value): It means that the source storage does not need to be accessed by safe protection.
     * SSL: Protective access through SSL certificates.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceSecurityType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DataFlowProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DataFlowProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DataFlowProps> {
        java.lang.Object fileSystemId;
        java.lang.Object fsetId;
        java.lang.Object sourceStorage;
        java.lang.Object throughput;
        java.lang.Object autoRefreshInterval;
        java.lang.Object autoRefreshPolicy;
        java.lang.Object autoRefreshs;
        java.lang.Object description;
        java.lang.Object sourceSecurityType;

        /**
         * Sets the value of {@link DataFlowProps#getFileSystemId}
         * @param fileSystemId Property fileSystemId: File system ID. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(java.lang.String fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getFileSystemId}
         * @param fileSystemId Property fileSystemId: File system ID. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getFsetId}
         * @param fsetId Property fsetId: Fileset ID. This parameter is required.
         * @return {@code this}
         */
        public Builder fsetId(java.lang.String fsetId) {
            this.fsetId = fsetId;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getFsetId}
         * @param fsetId Property fsetId: Fileset ID. This parameter is required.
         * @return {@code this}
         */
        public Builder fsetId(com.aliyun.ros.cdk.core.IResolvable fsetId) {
            this.fsetId = fsetId;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getSourceStorage}
         * @param sourceStorage Property sourceStorage: Access path stored at the source.Format: <storage Type>: // <PATH>. in: Storage Type: Currently only supports OSS. PATH: OSS's bucket name.Limit the following. Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number. The length is 8 ~ 128 English characters. Use UTF-8 encoding. Can't start with http: // and https: //. Explain that the OSS BUCKET must be the bucket that exists in the region. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceStorage(java.lang.String sourceStorage) {
            this.sourceStorage = sourceStorage;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getSourceStorage}
         * @param sourceStorage Property sourceStorage: Access path stored at the source.Format: <storage Type>: // <PATH>. in: Storage Type: Currently only supports OSS. PATH: OSS's bucket name.Limit the following. Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number. The length is 8 ~ 128 English characters. Use UTF-8 encoding. Can't start with http: // and https: //. Explain that the OSS BUCKET must be the bucket that exists in the region. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceStorage(com.aliyun.ros.cdk.core.IResolvable sourceStorage) {
            this.sourceStorage = sourceStorage;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getThroughput}
         * @param throughput Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB/s. Value:  600 1200 1500. This parameter is required.
         *                   Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
         * @return {@code this}
         */
        public Builder throughput(java.lang.Number throughput) {
            this.throughput = throughput;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getThroughput}
         * @param throughput Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB/s. Value:  600 1200 1500. This parameter is required.
         *                   Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
         * @return {@code this}
         */
        public Builder throughput(com.aliyun.ros.cdk.core.IResolvable throughput) {
            this.throughput = throughput;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getAutoRefreshInterval}
         * @param autoRefreshInterval Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory.
         *                            If there is data update, start the automatic update task, unit: minute.
         *                            Scope of value: 5 ~ 525600, default value: 10.
         * @return {@code this}
         */
        public Builder autoRefreshInterval(java.lang.Number autoRefreshInterval) {
            this.autoRefreshInterval = autoRefreshInterval;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getAutoRefreshInterval}
         * @param autoRefreshInterval Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory.
         *                            If there is data update, start the automatic update task, unit: minute.
         *                            Scope of value: 5 ~ 525600, default value: 10.
         * @return {@code this}
         */
        public Builder autoRefreshInterval(com.aliyun.ros.cdk.core.IResolvable autoRefreshInterval) {
            this.autoRefreshInterval = autoRefreshInterval;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getAutoRefreshPolicy}
         * @param autoRefreshPolicy Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.
         *                          None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
         *                          Importchanged: The data update at the source automatically imports CPFS.
         * @return {@code this}
         */
        public Builder autoRefreshPolicy(java.lang.String autoRefreshPolicy) {
            this.autoRefreshPolicy = autoRefreshPolicy;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getAutoRefreshPolicy}
         * @param autoRefreshPolicy Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.
         *                          None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
         *                          Importchanged: The data update at the source automatically imports CPFS.
         * @return {@code this}
         */
        public Builder autoRefreshPolicy(com.aliyun.ros.cdk.core.IResolvable autoRefreshPolicy) {
            this.autoRefreshPolicy = autoRefreshPolicy;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getAutoRefreshs}
         * @param autoRefreshs Property autoRefreshs:.
         * @return {@code this}
         */
        public Builder autoRefreshs(com.aliyun.ros.cdk.core.IResolvable autoRefreshs) {
            this.autoRefreshs = autoRefreshs;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getAutoRefreshs}
         * @param autoRefreshs Property autoRefreshs:.
         * @return {@code this}
         */
        public Builder autoRefreshs(java.util.List<? extends java.lang.Object> autoRefreshs) {
            this.autoRefreshs = autoRefreshs;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getDescription}
         * @param description Property description: Description of data flow.
         *                    limit:
         *                    The length is 2 to 128 English or Chinese characters.
         *                    Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
         *                    It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getDescription}
         * @param description Property description: Description of data flow.
         *                    limit:
         *                    The length is 2 to 128 English or Chinese characters.
         *                    Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
         *                    It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getSourceSecurityType}
         * @param sourceSecurityType Property sourceSecurityType: The type of safety protection types of the source storage.
         *                           If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
         *                           No (default value): It means that the source storage does not need to be accessed by safe protection.
         *                           SSL: Protective access through SSL certificates.
         * @return {@code this}
         */
        public Builder sourceSecurityType(java.lang.String sourceSecurityType) {
            this.sourceSecurityType = sourceSecurityType;
            return this;
        }

        /**
         * Sets the value of {@link DataFlowProps#getSourceSecurityType}
         * @param sourceSecurityType Property sourceSecurityType: The type of safety protection types of the source storage.
         *                           If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
         *                           No (default value): It means that the source storage does not need to be accessed by safe protection.
         *                           SSL: Protective access through SSL certificates.
         * @return {@code this}
         */
        public Builder sourceSecurityType(com.aliyun.ros.cdk.core.IResolvable sourceSecurityType) {
            this.sourceSecurityType = sourceSecurityType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DataFlowProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DataFlowProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DataFlowProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DataFlowProps {
        private final java.lang.Object fileSystemId;
        private final java.lang.Object fsetId;
        private final java.lang.Object sourceStorage;
        private final java.lang.Object throughput;
        private final java.lang.Object autoRefreshInterval;
        private final java.lang.Object autoRefreshPolicy;
        private final java.lang.Object autoRefreshs;
        private final java.lang.Object description;
        private final java.lang.Object sourceSecurityType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.fileSystemId = software.amazon.jsii.Kernel.get(this, "fileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fsetId = software.amazon.jsii.Kernel.get(this, "fsetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceStorage = software.amazon.jsii.Kernel.get(this, "sourceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.throughput = software.amazon.jsii.Kernel.get(this, "throughput", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRefreshInterval = software.amazon.jsii.Kernel.get(this, "autoRefreshInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRefreshPolicy = software.amazon.jsii.Kernel.get(this, "autoRefreshPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRefreshs = software.amazon.jsii.Kernel.get(this, "autoRefreshs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceSecurityType = software.amazon.jsii.Kernel.get(this, "sourceSecurityType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.fileSystemId = java.util.Objects.requireNonNull(builder.fileSystemId, "fileSystemId is required");
            this.fsetId = java.util.Objects.requireNonNull(builder.fsetId, "fsetId is required");
            this.sourceStorage = java.util.Objects.requireNonNull(builder.sourceStorage, "sourceStorage is required");
            this.throughput = java.util.Objects.requireNonNull(builder.throughput, "throughput is required");
            this.autoRefreshInterval = builder.autoRefreshInterval;
            this.autoRefreshPolicy = builder.autoRefreshPolicy;
            this.autoRefreshs = builder.autoRefreshs;
            this.description = builder.description;
            this.sourceSecurityType = builder.sourceSecurityType;
        }

        @Override
        public final java.lang.Object getFileSystemId() {
            return this.fileSystemId;
        }

        @Override
        public final java.lang.Object getFsetId() {
            return this.fsetId;
        }

        @Override
        public final java.lang.Object getSourceStorage() {
            return this.sourceStorage;
        }

        @Override
        public final java.lang.Object getThroughput() {
            return this.throughput;
        }

        @Override
        public final java.lang.Object getAutoRefreshInterval() {
            return this.autoRefreshInterval;
        }

        @Override
        public final java.lang.Object getAutoRefreshPolicy() {
            return this.autoRefreshPolicy;
        }

        @Override
        public final java.lang.Object getAutoRefreshs() {
            return this.autoRefreshs;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getSourceSecurityType() {
            return this.sourceSecurityType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("fileSystemId", om.valueToTree(this.getFileSystemId()));
            data.set("fsetId", om.valueToTree(this.getFsetId()));
            data.set("sourceStorage", om.valueToTree(this.getSourceStorage()));
            data.set("throughput", om.valueToTree(this.getThroughput()));
            if (this.getAutoRefreshInterval() != null) {
                data.set("autoRefreshInterval", om.valueToTree(this.getAutoRefreshInterval()));
            }
            if (this.getAutoRefreshPolicy() != null) {
                data.set("autoRefreshPolicy", om.valueToTree(this.getAutoRefreshPolicy()));
            }
            if (this.getAutoRefreshs() != null) {
                data.set("autoRefreshs", om.valueToTree(this.getAutoRefreshs()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getSourceSecurityType() != null) {
                data.set("sourceSecurityType", om.valueToTree(this.getSourceSecurityType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.DataFlowProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DataFlowProps.Jsii$Proxy that = (DataFlowProps.Jsii$Proxy) o;

            if (!fileSystemId.equals(that.fileSystemId)) return false;
            if (!fsetId.equals(that.fsetId)) return false;
            if (!sourceStorage.equals(that.sourceStorage)) return false;
            if (!throughput.equals(that.throughput)) return false;
            if (this.autoRefreshInterval != null ? !this.autoRefreshInterval.equals(that.autoRefreshInterval) : that.autoRefreshInterval != null) return false;
            if (this.autoRefreshPolicy != null ? !this.autoRefreshPolicy.equals(that.autoRefreshPolicy) : that.autoRefreshPolicy != null) return false;
            if (this.autoRefreshs != null ? !this.autoRefreshs.equals(that.autoRefreshs) : that.autoRefreshs != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.sourceSecurityType != null ? this.sourceSecurityType.equals(that.sourceSecurityType) : that.sourceSecurityType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.fileSystemId.hashCode();
            result = 31 * result + (this.fsetId.hashCode());
            result = 31 * result + (this.sourceStorage.hashCode());
            result = 31 * result + (this.throughput.hashCode());
            result = 31 * result + (this.autoRefreshInterval != null ? this.autoRefreshInterval.hashCode() : 0);
            result = 31 * result + (this.autoRefreshPolicy != null ? this.autoRefreshPolicy.hashCode() : 0);
            result = 31 * result + (this.autoRefreshs != null ? this.autoRefreshs.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.sourceSecurityType != null ? this.sourceSecurityType.hashCode() : 0);
            return result;
        }
    }
}
